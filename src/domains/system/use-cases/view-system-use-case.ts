/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { inject, injectable } from 'inversify';

/* types */
import type ViewSystemRepository from '../repositories/view-system-repository';

/* local imports */
import IDENTIFIERS from '../../../config/identifiers';
import { System } from '../entities';
@injectable()
class ViewSystemUseCase {
  repository: ViewSystemRepository;

  constructor(
    @inject(IDENTIFIERS.ViewSystemRepository) repository: ViewSystemRepository
  ) {
    this.repository = repository;
  }

  public async handle() {
    const systemDoc = this.repository.viewInfo();

    const systemEntity = System.create(systemDoc);

    return systemEntity.jsonify();
  }
}

export default ViewSystemUseCase;
