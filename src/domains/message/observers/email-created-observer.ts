/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Observer } from '@powerkernel/power-common';
import { Message } from '../entities';
import PrimarySmtpHander from '../handlers/primary-smtp-handler';
import SecondarySmtpHander from '../handlers/secondary-smtp-handler';

class EmailCreatedObserver implements Observer<Message> {
  async update(subject: Message): Promise<boolean> {
    const primaryHandler = new PrimarySmtpHander();
    const secondaryHandler = new SecondarySmtpHander();
    primaryHandler.setNext(secondaryHandler);
    return await primaryHandler.handle(subject);
  }
}

export default EmailCreatedObserver;
