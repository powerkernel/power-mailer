/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* local imports */
import { SystemDto } from '../dtos';
interface ViewSystemRepository {
  viewInfo(): SystemDto;
}

export default ViewSystemRepository;
