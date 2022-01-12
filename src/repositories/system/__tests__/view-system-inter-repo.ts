/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* types */
import type { ViewSystemRepository } from '../../../domains/system/repositories';

/* local imports */
import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';

it('works normally', () => {
  const repo = container.get<ViewSystemRepository>(
    IDENTIFIERS.ViewSystemRepository
  );

  const result = repo.viewInfo();

  expect(result).toHaveProperty('node');
  expect(result).toHaveProperty('platform');
});
