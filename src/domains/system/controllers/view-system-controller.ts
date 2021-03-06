/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/*  */
import { inject, injectable } from 'inversify';

/* local imports */
import IDENTIFIERS from '../../../config/identifiers';
import { ViewSystemUseCase } from './../use-cases';

@injectable()
class ViewSystemController {
  useCase: ViewSystemUseCase;

  constructor(
    @inject(IDENTIFIERS.ViewSystemUseCase) useCase: ViewSystemUseCase
  ) {
    this.useCase = useCase;
  }

  public execute() {
    return this.useCase.handle();
  }
}

export default ViewSystemController;
