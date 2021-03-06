/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

const IDENTIFIERS = {
  /* Repositories */
  ViewSystemRepository: Symbol.for('ViewSystemRepository'),
  NewMessageRepository: Symbol.for('NewMessageRepository'),

  /* Use Cases */
  ViewSystemUseCase: Symbol.for('ViewSystemUseCase'),
  NewMessageUseCase: Symbol.for('NewMessageUseCase'),

  /* Controller */
  ViewSystemController: Symbol.for('ViewSystemController'),
  NewMessageController: Symbol.for('NewMessageController'),

  /* Observers */
  EmailCreatedObserver: Symbol.for('EmailCreatedObserver'),

  /* handlers */
  PrimarySmtpHander: Symbol.for('PrimarySmtpHander'),
  SecondarySmtpHander: Symbol.for('SecondarySmtpHander'),
};

export default IDENTIFIERS;
