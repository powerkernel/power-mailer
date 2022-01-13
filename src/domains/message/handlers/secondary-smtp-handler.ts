/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import config from 'config';
import { Message } from '../entities';
import SmtpHandler, { SmtpConfig } from './smtp-handler';

class SecondarySmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    const smtpSecondaryConfig = config.get('smtp.secondary') as SmtpConfig;
    try {
      await this.sendMail(this.createTranspoter(smtpSecondaryConfig), message);
      console.log('SecondarySmtpHander handled the sending process.');
      return true;
    } catch (err) {
      console.error(err);
      return await super.handle(message);
    }
  }
}

export default SecondarySmtpHander;
