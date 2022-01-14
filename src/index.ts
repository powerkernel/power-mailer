/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import 'reflect-metadata';
import config from 'config';
import {
  MongoDbClient,
  MongoDbConfig,
} from '@powerkernel/power-mongodb-client';

/* local imports */
import { startApolloServer } from './frameworks/apollo';
import { NatsClient } from './clients';
import listen from './frameworks/listerners';

(async () => {
  const mongodbConfig = config.get('mongoDb') as MongoDbConfig;
  try {
    await MongoDbClient.connect(mongodbConfig);
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
