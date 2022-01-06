/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';
import type ViewSystemUseCase from './view-system-use-case';

it('executes normally', async () => {
  const useCase = container.get<ViewSystemUseCase>(
    IDENTIFIERS.ViewSystemUseCase
  );

  const result = await useCase.execute();

  expect(result).toHaveProperty('node');
  expect(result).toHaveProperty('platform');
});
