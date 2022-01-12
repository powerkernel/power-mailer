/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { connect, NatsConnection } from 'nats';
import config from 'config';
import os from 'os';

interface NatsConfig {
  servers: string[];
}

class NatsClient {
  private wrappedClient?: NatsConnection;

  get client(): NatsConnection {
    if (!this.wrappedClient) {
      throw new Error('Cannot access NATS client before connecting');
    }
    return this.wrappedClient;
  }

  async connect(): Promise<void> {
    if (!this.wrappedClient) {
      const nats = config.get('nats') as NatsConfig;
      const serviceName = config.get('service');
      try {
        this.wrappedClient = await connect({
          servers: nats.servers,
          noEcho: true,
          name: `${os.hostname()}-${serviceName}`,
        });
        console.log(
          `Successfully connected to NATS server @ ${this.wrappedClient.getServer()}`
        );
      } catch (err) {
        console.error('Error connecting to NATS server');
      }
    }
  }

  async close(): Promise<void> {
    console.log('Closing NATS connection...');
    if (this.wrappedClient) {
      await this.wrappedClient.close();
    }
  }
}

export default new NatsClient();
