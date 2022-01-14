/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import config from 'config';
import { injectable } from 'inversify';
import { Message } from '../entities';
import SmtpHandler, { SmtpConfig } from './smtp-handler';
@injectable()
class SecondarySmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    const smtpSecondaryConfig = config.get('smtp.secondary') as SmtpConfig;
    if(await this.sendMail(this.createTranspoter(smtpSecondaryConfig), message)) {
      return true;
    }
    else {
      return await super.handle(message);
    }
  }
}

export default SecondarySmtpHander;
