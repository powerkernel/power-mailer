/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import 'reflect-metadata';

/* local imports */
import { startApolloServer } from './frameworks/apollo';

(async () => {
  startApolloServer();
})();
