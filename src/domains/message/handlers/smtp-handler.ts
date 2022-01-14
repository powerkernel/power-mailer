/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { ChainHandler } from '@powerkernel/power-common';
import { Message } from '../entities';
import nodemailer from 'nodemailer';
import { injectable } from 'inversify';

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

@injectable()
abstract class SmtpHandler implements ChainHandler<Message> {
  private nextHandler?: ChainHandler<Message>;

  public setNext(handler: ChainHandler<Message>): ChainHandler<Message> {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(message: Message): Promise<boolean> {
    if (this.nextHandler) {
      return this.nextHandler.handle(message);
    }
    return false;
  }

  // create reusable transporter object using the default SMTP transport
  protected createTranspoter(smtp: SmtpConfig): nodemailer.Transporter {
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.auth.user,
        pass: smtp.auth.pass,
      },
    });
    return transporter;
  }

  // send mail with provided transport object and message
  protected async sendMail(
    transporter: nodemailer.Transporter,
    message: Message
  ): Promise<boolean> {
    try {
      const info = await transporter.sendMail({
        from: message.from,
        to: message.to,
        subject: message.subject,
        text: message.text,
        html: message.html,
      });
      return typeof info.messageId === 'string';
    }
    catch (err) {
      return false;
    }
    
  }
}

export default SmtpHandler;
