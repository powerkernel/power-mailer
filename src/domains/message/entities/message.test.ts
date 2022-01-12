/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Message } from './../entities';

it('returns a json object', () => {
  const doc = {
    id: '51e11e09-092b-4c10-91e5-1165981795ac',
    from: 'person1@email.com',
    to: 'person2@email.com',
    subject: 'Welcome',
    html: '<div>Hello World</div>',
    text: 'Hello World',
    createdAt: '2011-10-05T14:48:00.000Z',
    updatedAt: '2011-10-05T14:48:00.000Z',
  };
  const message = Message.create(doc);

  expect(message.jsonify()).toEqual(doc);
});

it('throws an error if invalid `from` provided', () => {
  const doc = {
    id: '51e11e09-092b-4c10-91e5-1165981795ac',
    from: 'person1',
    to: 'person2@email.com',
    subject: 'Welcome',
    html: '<div>Hello World</div>',
    text: 'Hello World',
    createdAt: '2011-10-05T14:48:00.000Z',
    updatedAt: '2011-10-05T14:48:00.000Z',
  };

  expect(() => {
    Message.create(doc);
  }).toThrow('Invalid `from`');
});

it('throws an error if invalid `to` provided', () => {
  const doc = {
    id: '51e11e09-092b-4c10-91e5-1165981795ac',
    from: 'person1@email.com',
    to: 'person2',
    subject: 'Welcome',
    html: '<div>Hello World</div>',
    text: 'Hello World',
    createdAt: '2011-10-05T14:48:00.000Z',
    updatedAt: '2011-10-05T14:48:00.000Z',
  };

  expect(() => {
    Message.create(doc);
  }).toThrow('Invalid `to`');
});
