/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

/* local imports */
import container from '../../../config/container';
import IDENTIFIERS from '../../../config/identifiers';
import NewMessageUseCase from '../use-cases/__mocks__/new-message-use-case';

/* local imports */
import type { NewMessageController } from '../../message/controllers';

beforeAll(() => {
  container.unbind(IDENTIFIERS.NewMessageUseCase);
  container
    .bind<NewMessageUseCase>(IDENTIFIERS.NewMessageUseCase)
    .to(NewMessageUseCase);
});

it('executes normally', async () => {
  const controller = container.get<NewMessageController>(
    IDENTIFIERS.NewMessageController
  );

  const response = await controller.execute({
    from: 'info@domain.com',
    to: 'someone@domain.com',
    subject: 'Welcome',
    html: '<p>Hello world</p>',
    text: 'Hello world',
  });

  expect(response).toHaveProperty('from');
  expect(response).toHaveProperty('to');
});
