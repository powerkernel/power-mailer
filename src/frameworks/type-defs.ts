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

  type MessageDto {
    id: ID!
    from: String
    to: String
    subject: String
    html: String
    text: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    viewSystem: SystemDoc
  }

  type Mutation {
    newMessage(
      from: String!
      to: String!
      subject: String!
      html: String
      text: String
    ): MessageDto
  }
`;
