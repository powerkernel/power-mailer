/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { injectable } from 'inversify';

/* local imports */
import { SystemDto } from '../../domains/system/dtos';
import ViewSystemRepository from '../../domains/system/repositories/view-system-repository';
@injectable()
class ViewSystemInterRepo implements ViewSystemRepository {
  viewInfo(): SystemDto {
    return {
      node: process.version,
      platform: process.platform,
    };
  }
}

export default ViewSystemInterRepo;
