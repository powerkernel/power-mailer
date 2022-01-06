/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { injectable } from 'inversify';
import ViewSystemRepository from '../../domains/system/repositories/view-system-repository';

/* local imports */
import { SystemDoc } from '../../domains/system';

@injectable()
class ViewSystemInterRepo implements ViewSystemRepository {
  viewInfo(): SystemDoc {
    return {
      node: process.version,
      platform: process.platform,
    };
  }
}

export default ViewSystemInterRepo;
