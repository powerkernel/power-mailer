/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from '../config/container';
import IDENTIFIERS from '../config/identifiers';
import type { NewMessageController } from '../domains/message/controllers';
import type { ViewSystemController } from '../domains/system/controllers';

const ViewSystemCtl = container.get<ViewSystemController>(
  IDENTIFIERS.ViewSystemController
);
const NewMessageCtl = container.get<NewMessageController>(
  IDENTIFIERS.NewMessageController
);

const resolvers = {
  Query: {
    viewSystem: () => ViewSystemCtl.execute(),
  },
  Mutation: {
    newMessage: async (
      _parent: unknown,
      args: {
        from: string;
        to: string;
        subject: string;
        html: string;
        text: string;
      }
    ) => {
      return await NewMessageCtl.execute(args);
    },
  },
};

export default resolvers;
