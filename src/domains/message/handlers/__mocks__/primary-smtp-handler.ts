/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

// import { Message } from '../../entities';
import SmtpHandler from './smtp-handler';

class PrimarySmtpHander extends SmtpHandler {
  public async handle(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(true);
    });
  }
}

export default PrimarySmtpHander;
