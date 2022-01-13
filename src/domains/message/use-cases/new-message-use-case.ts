/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* import npm packages */
import { Helper } from '@powerkernel/power-common';
import { inject, injectable } from 'inversify';

/* types */
import type { NewMessageRepository } from '../repositories';

/* local imports */
import { Message } from '../entities';

import IDENTIFIERS from '../../../config/identifiers';
import { MessageDto, NewMessageDto } from '../dtos';
import EmailCreatedObserver from '../observers/email-created-observer';

@injectable()
class NewMessageUseCase {
  repository: NewMessageRepository;

  constructor(
    @inject(IDENTIFIERS.NewMessageRepository) repository: NewMessageRepository
  ) {
    this.repository = repository;
  }

  public async handle(dto: NewMessageDto): Promise<MessageDto> {
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

    await this.repository.saveMessage(messageEntity.jsonify());

    // observer
    messageEntity.attach(new EmailCreatedObserver());
    messageEntity.notify();

    return doc;
  }
}
export default NewMessageUseCase;
