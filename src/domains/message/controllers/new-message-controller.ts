/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { inject, injectable } from 'inversify';
import IDENTIFIERS from '../../../config/identifiers';
import { NewMessageUseCase } from '../use-cases';

@injectable()
class NewMessageController {
  useCase: NewMessageUseCase;

  constructor(
    @inject(IDENTIFIERS.NewMessageUseCase) useCase: NewMessageUseCase
  ) {
    this.useCase = useCase;
  }

  public async execute(data: {
    from: string;
    to: string;
    subject: string;
    html: string;
    text: string;
  }) {
    const dto = {
      from: data.from,
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    };
    const doc = await this.useCase.handle(dto);

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
