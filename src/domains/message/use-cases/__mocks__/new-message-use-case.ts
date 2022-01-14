/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* eslint-disable indent */
/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* import npm packages */
import { Helper } from '@powerkernel/power-common';
import { injectable } from 'inversify';

/* local imports */
import { MessageDto, NewMessageDto } from '../../dtos';

@injectable()
class NewMessageUseCase {
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

    return new Promise<MessageDto>((resolve) => {
      resolve(doc);
    });
  }
}
export default NewMessageUseCase;
