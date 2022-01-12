/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { NatsConnection } from 'nats';

class NatsClient {
  private wrappedClient: NatsConnection | undefined;

  get client() {
    return this.wrappedClient;
  }

  async connect(): Promise<void> {
    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  async close(): Promise<void> {
    console.log('Closing NATS connection...');
    return new Promise<void>((resolve) => {
      resolve();
    });
  }
}

export default new NatsClient();
