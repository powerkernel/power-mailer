/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* import npm packages */
import { injectable } from 'inversify';

/* local imports */
import { MongoDbClient } from '../../clients';
import { MessageDto } from '../../domains/message/dtos';
import { NewMessageRepository } from '../../domains/message/repositories';

@injectable()
class NewMessageMongoRepo implements NewMessageRepository {
  async saveMessage(doc: MessageDto): Promise<MessageDto> {
    const db = MongoDbClient.db;
    const data = {
      _id: doc.id,
      from: doc.from,
      to: doc.to,
      subject: doc.subject,
      html: doc.html,
      text: doc.text,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    } as never;
    db.collection('messages').insertOne(data);
    return doc;
  }
}

export default NewMessageMongoRepo;
