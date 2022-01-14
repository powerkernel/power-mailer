/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { injectable } from 'inversify';
import { Message } from '../../entities';
import SmtpHandler from '../smtp-handler';

@injectable()
class FailureSmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    return await super.handle(message);
  }
}

export default FailureSmtpHander;
