/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { ChainHandler } from '@powerkernel/power-common';
import { Message } from '../entities';

abstract class SmtpHandler implements ChainHandler<Message> {
  private nextHandler?: ChainHandler<Message>;

  public setNext(handler: ChainHandler<Message>): ChainHandler<Message> {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(message: Message): Promise<boolean> {
    if (this.nextHandler) {
      return this.nextHandler.handle(message);
    }
    return false;
  }
}

export default SmtpHandler;
