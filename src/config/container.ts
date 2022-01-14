/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Container } from 'inversify';

/* local import */
import IDENTIFIERS from './identifiers';
import { bindRepositories } from './ioc-repository';
import { bindUseCases } from './ioc-usecase';
import { bindControllers } from './ioc-controller';
import { bindObservers } from './ioc-observer';

import PrimarySmtpHander from '../domains/message/handlers/primary-smtp-handler';
import SecondarySmtpHander from '../domains/message/handlers/secondary-smtp-handler';

/* main */
const container = new Container();
bindRepositories(container);
bindUseCases(container);
bindControllers(container);
bindObservers(container);

/* handers */
container
  .bind<PrimarySmtpHander>(IDENTIFIERS.PrimarySmtpHander)
  .to(PrimarySmtpHander);
container
  .bind<SecondarySmtpHander>(IDENTIFIERS.SecondarySmtpHander)
  .to(SecondarySmtpHander);

/* exports */
export default container;
