/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import 'reflect-metadata';

/* local imports */
import { startApolloServer } from './frameworks/apollo';
import { MongoDbClient, NatsClient } from './clients';
import listen from './frameworks/listerners';

(async () => {
  try {
    await MongoDbClient.connect();
    await NatsClient.connect();
    await startApolloServer();

    // event listeners
    listen();

    // exiting
    const handleExit = (signal: string) => {
      console.log(`Received ${signal}`);
      Promise.all([NatsClient.close(), MongoDbClient.close()]).then(() => {
        process.exit();
      });
    };
    process.on('SIGINT', handleExit);
    process.on('SIGTERM', handleExit);
  } catch (err) {
    console.error('Cannot start the server', err);
    process.exit();
  }
})();
