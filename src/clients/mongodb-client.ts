/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Db, MongoClient, Binary } from 'mongodb';
import config from 'config';

interface MongoDbConfig {
  dbUri: string;
  dbName: string;
}

class MongoDbClient {
  private wrappedDb?: Db;
  private wrappedClient?: MongoClient;

  get db(): Db {
    if (!this.wrappedDb) {
      throw new Error('Cannot access DB before connecting');
    }
    return this.wrappedDb;
  }

  createUuid(id: string): Binary {
    return new Binary(
      Buffer.from(id.replace(/-/g, ''), 'hex'),
      Binary.SUBTYPE_UUID
    );
  }

  stringifyUuid(uuid: Binary): string {
    const buffer = uuid.buffer;
    return [
      buffer.toString('hex', 0, 4),
      buffer.toString('hex', 4, 6),
      buffer.toString('hex', 6, 8),
      buffer.toString('hex', 8, 10),
      buffer.toString('hex', 10, 16),
    ].join('-');
  }

  async connect(): Promise<void> {
    const dbConfig = config.get('mongoDb') as MongoDbConfig;

    // Create a new MongoDB client with the connection string
    this.wrappedClient = new MongoClient(dbConfig.dbUri);

    // Connect to the cluster
    await this.wrappedClient.connect();

    // Connect to the database with the name specified from the config
    this.wrappedDb = this.wrappedClient.db(dbConfig.dbName);

    console.log('Successfully connected to MongoDB database');
  }

  async close(): Promise<void> {
    console.log('Closing MongoDB connection...');
    if (this.wrappedClient) {
      await this.wrappedClient.close();
    }
  }
}

export default new MongoDbClient();
