/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Container } from 'inversify';

/* local import */
import { bindRepositories } from './ioc-repository';
import { bindUseCases } from './ioc-usecase';
import { bindControllers } from './ioc-controllers';

/* main */
const container = new Container();
bindRepositories(container);
bindUseCases(container);
bindControllers(container);

/* exports */
export default container;
