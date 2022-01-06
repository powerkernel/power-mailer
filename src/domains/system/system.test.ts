/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { System } from './system';

it('returns a json object', () => {
  const doc = {
    platform: 'MacOS',
    node: '16 LTS',
  };
  const system = System.create(doc);

  expect(system.toJson()).toEqual(doc);
});
