/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

type NewMessageDto = {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
};

export default NewMessageDto;
