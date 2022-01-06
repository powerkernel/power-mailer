/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

type SystemDoc = {
  node: string;
  platform: string;
};

class System {
  private _node!: string;
  private _platform!: string;

  public get node(): string {
    return this._node;
  }

  public get platform(): string {
    return this._platform;
  }

  private constructor(doc: SystemDoc) {
    this._platform = doc.platform;
    this._node = doc.node;
  }

  public static create(doc: SystemDoc) {
    return new System(doc);
  }

  public toJson(): SystemDoc {
    return {
      platform: this.platform,
      node: this.node,
    };
  }
}

export { System, SystemDoc };
