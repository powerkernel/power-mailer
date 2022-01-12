/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

type MessageDto = {
  id: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export default MessageDto;
