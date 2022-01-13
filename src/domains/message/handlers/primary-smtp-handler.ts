/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Message } from '../entities';
import SmtpHandler from './smtp-handler';

class PrimarySmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    const success = false;
    if (success) {
      console.log('PrimarySmtpHander handled the sending process.');
      return true;
    } else {
      console.log('PrimarySmtpHander failed to handle the sending process.');
      return super.handle(message);
    }
  }
}

export default PrimarySmtpHander;
