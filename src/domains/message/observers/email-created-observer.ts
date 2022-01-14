/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Observer } from '@powerkernel/power-common';
import { inject, injectable } from 'inversify';

/* local imports */
import IDENTIFIERS from '../../../config/identifiers';
import { Message } from '../entities';
import type PrimarySmtpHander from '../handlers/primary-smtp-handler';
import type SecondarySmtpHander from '../handlers/secondary-smtp-handler';

@injectable()
class EmailCreatedObserver implements Observer<Message> {
  private primaryHandler: PrimarySmtpHander;
  private secondaryHandler: SecondarySmtpHander;

  constructor(
    @inject(IDENTIFIERS.PrimarySmtpHander)
      primaryHandler: PrimarySmtpHander,
    @inject(IDENTIFIERS.SecondarySmtpHander)
      secondaryHandler: SecondarySmtpHander
  ) {
    this.primaryHandler = primaryHandler;
    this.secondaryHandler = secondaryHandler;
  }

  async update(subject: Message): Promise<boolean> {
    this.primaryHandler.setNext(this.secondaryHandler);
    return await this.primaryHandler.handle(subject);
  }
}

export default EmailCreatedObserver;
