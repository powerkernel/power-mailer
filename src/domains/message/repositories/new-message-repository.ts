/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { MessageDto } from '../dtos';

interface NewMessageRepository {
  saveMessage(doc: MessageDto): Promise<MessageDto>;
}
export default NewMessageRepository;
