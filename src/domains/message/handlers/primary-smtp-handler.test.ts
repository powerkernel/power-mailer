/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';
import { Message } from '../entities';
import PrimarySmtpHander from './primary-smtp-handler';


it('handles normally', async()=>{
  // get the hander
  const handler = container.get<PrimarySmtpHander>(IDENTIFIERS.PrimarySmtpHander);

  // create message
  const doc = {
    id: '51e11e09-092b-4c10-91e5-1165981795ac',
    from: 'info@powerkernel.net',
    to: 'PrimarySmtpHander@powerkernel.net',
    subject: 'Welcome',
    html: '<div>Hello World</div>',
    text: 'Hello World',
    createdAt: '2011-10-05T14:48:00.000Z',
    updatedAt: '2011-10-05T14:48:00.000Z',
  };
  const message = Message.create(doc);

  const result = await handler.handle(message);
  expect(result).toEqual(true);
});

it('passes to the next handler', async()=>{
  // get the hander
  const handler = container.get<PrimarySmtpHander>(IDENTIFIERS.PrimarySmtpHander);

  // spy
  jest.spyOn(handler, 'sendMail' as never).mockReturnValue(false as never);

  // create message
  const doc = {
    id: '51e11e09-092b-4c10-91e5-1165981795ac',
    from: 'info@powerkernel.net',
    to: 'PrimarySmtpHander@powerkernel.net',
    subject: 'Welcome',
    html: '<div>Hello World</div>',
    text: 'Hello World',
    createdAt: '2011-10-05T14:48:00.000Z',
    updatedAt: '2011-10-05T14:48:00.000Z',
  };
  const message = Message.create(doc);

  const result = await handler.handle(message);
  expect(result).toEqual(false);
});