/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import 'reflect-metadata';

/* local imports */
import { startApolloServer } from './frameworks/apollo';
import { MongoDbClient } from './clients';

// const subscribe = async (nc: NatsConnection) => {
//   // add jet stream
//   const jsm = await nc.jetstreamManager();
//   const stream = 'otp';
//   const subj = 'otp.*';
//   await jsm.streams.add({ name: stream, subjects: [subj] });

//   // jet stream sub
//   const js = nc.jetstream();
//   const opts = consumerOpts();
//   opts.durable('harry');
//   opts.manualAck();
//   opts.ackExplicit();
//   opts.deliverTo(createInbox());
//   opts.callback((_, msg) => {
//     if (msg !== null) {
//       console.log(msg.seq);

//       msg.ack();
//     }
//   });
//   await js.subscribe(subj, opts);
// };

(async () => {
  try {
    await MongoDbClient.connect();
    await startApolloServer();

    // exiting
    const handleExit = async (signal: string) => {
      console.log(`Received ${signal}`);
      process.exit();
    };
    process.on('SIGINT', handleExit);
    process.on('SIGTERM', handleExit);
  } catch (err) {
    console.error('Cannot start the server', err);
    process.exit();
  }
})();
