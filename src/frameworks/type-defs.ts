/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { gql } from 'apollo-server-core';

export default gql`
  type SystemDoc {
    platform: String
    node: String
  }
  type Query {
    viewSystem: SystemDoc
  }
`;
