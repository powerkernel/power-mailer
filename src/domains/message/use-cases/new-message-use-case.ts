/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* import npm packages */
import { Helper } from '@powerkernel/power-common';

/* types */
import type { NewMessageRepository } from '../repositories';

/* local imports */
import { Message } from '../entities';
import { inject, injectable } from 'inversify';
import IDENTIFIERS from '../../../config/identifiers';
import { NewMessageDto } from '../dtos';

@injectable()
class NewMessageUseCase {
  repository: NewMessageRepository;

  constructor(
    @inject(IDENTIFIERS.NewMessageRepository) repository: NewMessageRepository
  ) {
    this.repository = repository;
  }

  public async handle(dto: NewMessageDto) {
    const date = new Date();

    const doc = {
      id: Helper.uuidV4(),
      from: dto.from,
      to: dto.to,
      subject: dto.subject,
      html: dto.html,
      text: dto.text,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    };

    const messageEntity = Message.create(doc);

    return await this.repository.saveMessage(messageEntity.jsonify());
  }
}
export default NewMessageUseCase;
