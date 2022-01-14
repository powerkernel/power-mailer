/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { inject, injectable } from 'inversify';
import IDENTIFIERS from '../../../config/identifiers';
import { MessageDto, NewMessageDto } from '../dtos';
import { NewMessageUseCase } from '../use-cases';

@injectable()
class NewMessageController {
  useCase: NewMessageUseCase;

  constructor(
    @inject(IDENTIFIERS.NewMessageUseCase) useCase: NewMessageUseCase
  ) {
    this.useCase = useCase;
  }

  public async execute(data: NewMessageDto): Promise<MessageDto> {
    const doc = await this.useCase.handle(data);

    return {
      id: doc.id,
      from: doc.from,
      to: doc.to,
      subject: doc.subject,
      html: doc.html,
      text: doc.text,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }
}

export default NewMessageController;
