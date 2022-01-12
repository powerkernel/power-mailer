/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';
import NewMessageRepository from '../domains/message/repositories/new-message-repository';
import ViewSystemRepository from '../domains/system/repositories/view-system-repository';
import { NewMessageMongoRepo } from '../repositories/message';
import ViewSystemInterRepo from '../repositories/system/view-system-inter-repo';

/* local imports */
import IDENTIFIERS from './identifiers';

/* main */
const bindRepositories = (container: Container) => {
  container
    .bind<ViewSystemRepository>(IDENTIFIERS.ViewSystemRepository)
    .to(ViewSystemInterRepo);

  container
    .bind<NewMessageRepository>(IDENTIFIERS.NewMessageRepository)
    .to(NewMessageMongoRepo);
};

/* exports */
export { bindRepositories };
