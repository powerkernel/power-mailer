/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';
import { NewMessageDto } from '../dtos';
import { NewMessageUseCase } from './../use-cases';

it('should handle normally', async () => {
  const uc = container.get<NewMessageUseCase>(IDENTIFIERS.NewMessageUseCase);

  const dto: NewMessageDto = {
    from: 'person1@email.com',
    to: 'person2@email.com',
    subject: 'Welcome',
    html: '<div>Hello World</div>',
    text: 'Hello World',
  };

  const doc = await uc.handle(dto);
  expect(doc).toHaveProperty('id');
  expect(doc).toHaveProperty('from');
  expect(doc).toHaveProperty('to');
  expect(doc).toHaveProperty('subject');
  expect(doc).toHaveProperty('html');
  expect(doc).toHaveProperty('text');
  expect(doc).toHaveProperty('createdAt');
  expect(doc).toHaveProperty('updatedAt');
});
