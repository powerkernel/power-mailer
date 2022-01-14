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
class PrimarySmtpHander extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    const smtpPrimaryConfig = config.get('smtp.primary') as SmtpConfig;
    if(await this.sendMail(this.createTranspoter(smtpPrimaryConfig), message)) {
      return true;
    }
    else {
      return await super.handle(message);
    }
  }
}

export default PrimarySmtpHander;
