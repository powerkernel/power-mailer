/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';

/* local imports */
import IDENTIFIERS from './identifiers';
import EmailCreatedObserver from '../domains/message/observers/email-created-observer';

/* main */
const bindObservers = (container: Container) => {
  container
    .bind<EmailCreatedObserver>(IDENTIFIERS.EmailCreatedObserver)
    .to(EmailCreatedObserver);
};

/* export */
export { bindObservers };
