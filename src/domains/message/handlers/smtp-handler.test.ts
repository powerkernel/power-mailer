/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Message } from '../entities';
import SmtpHandler from './smtp-handler';

class Mailer extends SmtpHandler {
  public async handle(message: Message): Promise<boolean> {
    if(await this.sendMail(this.createTranspoter({
      'host': 'primary.smtp.com',
      'port': 465,
      'secure': true,
      'auth': {
        'user': 'auth@primary.smtp.com',
        'pass': 'SOME_PASSWORD'
      }
    }), message)) {
      return true;
    }
    else {
      return await super.handle(message);
    }
  }
}

it('is NOT functioning normally', async()=>{
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

  const mailer = new Mailer();

  const result = await mailer.handle(message);
  expect(result).toEqual(false);
});