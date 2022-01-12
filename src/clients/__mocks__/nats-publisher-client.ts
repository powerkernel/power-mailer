/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { PublisherClient } from '@powerkernel/power-common';
import { injectable } from 'inversify';

@injectable()
class NatsPublisherClient implements PublisherClient {
  async publish(): Promise<void> {
    return new Promise<void>((resolve) => {
      resolve();
    });
  }
}

export default NatsPublisherClient;
