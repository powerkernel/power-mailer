/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* local imports */
import { injectable } from 'inversify';
import { MessageDto } from '../../../domains/message/dtos';
import { NewMessageRepository } from '../../../domains/message/repositories';

@injectable()
class NewMessageMongoRepo implements NewMessageRepository {
  async saveMessage(doc: MessageDto): Promise<MessageDto> {
    return new Promise((resolve) => {
      resolve(doc);
    });
  }
}

export default NewMessageMongoRepo;
