/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

export default Handler;
