/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { injectable } from 'inversify';
import SmtpHandler from '../smtp-handler';

@injectable()
class SuccessSmtpHander extends SmtpHandler {
  public async handle(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(true);
    });
  }
}

export default SuccessSmtpHander;
