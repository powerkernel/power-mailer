/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { System } from '.';

it('returns a json object', () => {
  const doc = {
    platform: 'MacOS',
    node: '16 LTS',
  };
  const system = System.create(doc);

  expect(system.jsonify()).toEqual(doc);
});
