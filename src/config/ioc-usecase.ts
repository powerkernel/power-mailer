/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';
import NewMessageUseCase from '../domains/message/use-cases/new-message-use-case';
import ViewSystemUseCase from '../domains/system/use-cases/view-system-use-case';

/* local imports */
import IDENTIFIERS from './identifiers';

/* main */
const bindUseCases = (container: Container) => {
  container
    .bind<ViewSystemUseCase>(IDENTIFIERS.ViewSystemUseCase)
    .to(ViewSystemUseCase);
  container
    .bind<NewMessageUseCase>(IDENTIFIERS.NewMessageUseCase)
    .to(NewMessageUseCase);
};

/* export */
export { bindUseCases };
