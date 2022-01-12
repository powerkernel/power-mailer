/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Entity, Jsonifier } from '@powerkernel/power-common';
import { SystemDto } from '../dtos';

class System extends Entity implements Jsonifier<SystemDto> {
  private _node!: string;
  private _platform!: string;

  public get node(): string {
    return this._node;
  }

  public get platform(): string {
    return this._platform;
  }

  private constructor(doc: SystemDto) {
    super();
    this._platform = doc.platform;
    this._node = doc.node;
  }

  public static create(doc: SystemDto) {
    return new System(doc);
  }

  public jsonify(): SystemDto {
    return {
      platform: this.platform,
      node: this.node,
    };
  }
}

export default System;
