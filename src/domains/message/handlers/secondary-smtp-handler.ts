/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Message } from '../entities';
import SmtpHandler from './smtp-handler';

class SecondarySmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    const success = true;
    if (success) {
      console.log('SecondarySmtpHander handled the sending process.');
      return true;
    } else {
      console.log('SecondarySmtpHander failed to handle the sending process.');
      return super.handle(message);
    }
  }
}

export default SecondarySmtpHander;
