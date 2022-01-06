/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';
import ViewSystemController from '../domains/system/controllers/view-system-controller';

/* local imports */
import IDENTIFIERS from './identifiers';

/* main */
const bindControllers = (container: Container) => {
  container
    .bind<ViewSystemController>(IDENTIFIERS.ViewSystemController)
    .to(ViewSystemController);
};

/* export */
export { bindControllers };
