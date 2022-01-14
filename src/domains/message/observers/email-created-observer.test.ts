/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { EmailCreatedObserver } from '.';
import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';
import { Message } from '../entities';

import SuccessSmtpHander from '../handlers/__mocks__/success-smtp-handler';
import FailureSmtpHander from '../handlers/__mocks__/failure-smtp-handler';

/* type imports */
import type PrimarySmtpHander from '../handlers/primary-smtp-handler';
import type SecondarySmtpHander from '../handlers/secondary-smtp-handler';

it('triggers the smtp primary handler', async () => {
  // mock
  container.unbind(IDENTIFIERS.PrimarySmtpHander);
  container.unbind(IDENTIFIERS.SecondarySmtpHander);
  container.bind<PrimarySmtpHander>(IDENTIFIERS.PrimarySmtpHander).to(SuccessSmtpHander);
  container.bind<SecondarySmtpHander>(IDENTIFIERS.SecondarySmtpHander).to(FailureSmtpHander);

  // get the observer
  const observer = container.get<EmailCreatedObserver>(
    IDENTIFIERS.EmailCreatedObserver
  );

  // create the message
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

  // trigger the observer
  const result = await observer.update(message);
  expect(result).toEqual(true);
  
});

it('triggers the smtp secondary handler if the primary fails', async () => {
  // mock
  container.unbind(IDENTIFIERS.PrimarySmtpHander);
  container.unbind(IDENTIFIERS.SecondarySmtpHander);
  container.bind<PrimarySmtpHander>(IDENTIFIERS.PrimarySmtpHander).to(FailureSmtpHander);
  container.bind<SecondarySmtpHander>(IDENTIFIERS.SecondarySmtpHander).to(SuccessSmtpHander);

  // get the observer
  const observer = container.get<EmailCreatedObserver>(
    IDENTIFIERS.EmailCreatedObserver
  );

  // create the message
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

  // trigger the observer
  const result = await observer.update(message);
  expect(result).toEqual(true);
  
});

it('fail to send out the message', async () => {
  // mock
  container.unbind(IDENTIFIERS.PrimarySmtpHander);
  container.unbind(IDENTIFIERS.SecondarySmtpHander);
  container.bind<PrimarySmtpHander>(IDENTIFIERS.PrimarySmtpHander).to(FailureSmtpHander);
  container.bind<SecondarySmtpHander>(IDENTIFIERS.SecondarySmtpHander).to(FailureSmtpHander);

  // get the observer
  const observer = container.get<EmailCreatedObserver>(
    IDENTIFIERS.EmailCreatedObserver
  );

  // create the message
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

  // trigger the observer
  const result = await observer.update(message);
  expect(result).toEqual(false);
  
});
