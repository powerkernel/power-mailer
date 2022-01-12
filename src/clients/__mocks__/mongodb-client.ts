/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Db } from 'mongodb';

class MongoDbClient {
  private wrappedDb?: Db;

  get db() {
    return this.wrappedDb;
  }

  async connect(): Promise<void> {
    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  async close(): Promise<void> {
    return new Promise<void>((resolve) => {
      resolve();
    });
  }
}

export default new MongoDbClient();
