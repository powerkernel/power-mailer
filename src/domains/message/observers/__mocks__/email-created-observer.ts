/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* npm packages */
import { Observer } from '@powerkernel/power-common';
import { injectable } from 'inversify';

/* local imports */
import { Message } from '../../entities';

@injectable()
class EmailCreatedObserver implements Observer<Message> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(subject: Message): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(true);
    });
  }
}

export default EmailCreatedObserver;
