/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Events } from '@powerkernel/power-common';
import config from 'config';
import { StringCodec, consumerOpts, createInbox, JetStreamClient } from 'nats';
import { NatsClient } from '../clients';
import container from '../config/container';
import IDENTIFIERS from '../config/identifiers';

/* import types */
import type { NewMessageController } from '../domains/message/controllers';

const subscription = {
  otpCreated: async (js: JetStreamClient, service: string) => {
    const NewMessageCtl = container.get<NewMessageController>(
      IDENTIFIERS.NewMessageController
    );

    const opts = consumerOpts();
    opts.queue(service);
    opts.manualAck();
    opts.ackExplicit();
    opts.deliverTo(createInbox());
    opts.callback((_, msg) => {
      if (msg !== null) {
        const sc = StringCodec();
        const eventDetail = JSON.parse(
          sc.decode(msg.data)
        ) as Events.OtpCreatedEvent['detail'];

        // message
        const sender = config.get('smtp.sender') as string;
        NewMessageCtl.execute({
          from: sender,
          to: eventDetail.data.identifier,
          subject: `OTP code - ${eventDetail.data.code}`,
          html: eventDetail.data.code,
          text: eventDetail.data.code,
        });
        msg.ack();
      }
    });
    await js.subscribe('otp.created', opts);
  },
};

const listen = () => {
  const js = NatsClient.client.jetstream();
  const serviceName = config.get('service') as string;

  subscription.otpCreated(js, serviceName);
};

export default listen;
