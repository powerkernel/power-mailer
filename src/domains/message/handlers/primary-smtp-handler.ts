/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import config from 'config';
import { Message } from '../entities';
import SmtpHandler, { SmtpConfig } from './smtp-handler';

class PrimarySmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    const smtpPrimaryConfig = config.get('smtp.primary') as SmtpConfig;
    try {
      await this.sendMail(this.createTranspoter(smtpPrimaryConfig), message);
      console.log('PrimarySmtpHander handled the sending process.');
      return true;
    } catch (err) {
      console.error(err);
      return await super.handle(message);
    }
  }
}

export default PrimarySmtpHander;
