/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';
import NewMessageController from '../domains/message/controllers/new-message-controller';
import ViewSystemController from '../domains/system/controllers/view-system-controller';

/* local imports */
import IDENTIFIERS from './identifiers';

/* main */
const bindControllers = (container: Container) => {
  container
    .bind<ViewSystemController>(IDENTIFIERS.ViewSystemController)
    .to(ViewSystemController);

  container
    .bind<NewMessageController>(IDENTIFIERS.NewMessageController)
    .to(NewMessageController);
};

/* export */
export { bindControllers };
