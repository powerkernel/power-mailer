/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import config from 'config';
import { StringCodec, consumerOpts, createInbox, JetStreamClient } from 'nats';
import { NatsClient } from '../clients';
import container from '../config/container';
import IDENTIFIERS from '../config/identifiers';
import { OtpCreatedEvent } from '@powerkernel/power-common/dist/events';

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
        const event = JSON.parse(sc.decode(msg.data));
        NewMessageCtl.execute({
          from: 'info@powerkernel.com',
          to: event.data.identifier,
          subject: `OTP code - ${event.data.code}`,
          html: event.data.code,
          text: event.data.code,
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
