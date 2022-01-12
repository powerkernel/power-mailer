/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';
import type NewMessageController from './new-message-controller';

const NewMessageCtl = container.get<NewMessageController>(
  IDENTIFIERS.NewMessageController
);
export { NewMessageCtl as NewMessageController };
