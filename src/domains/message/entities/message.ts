/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Validator, Entity, Jsonifier } from '@powerkernel/power-common';
import { MessageDto } from '../dtos';

class Message extends Entity implements Jsonifier<MessageDto> {
  private wrappedFrom!: string;
  private wrappedTo!: string;
  private wrappedSubject!: string;
  private wrappedHtml!: string;
  private wrappedText!: string;

  private constructor(doc: MessageDto) {
    super();
    this.id = doc.id;
    this.from = doc.from;
    this.to = doc.to;
    this.subject = doc.subject;
    this.html = doc.html;
    this.text = doc.text;
    this.createdAt = doc.createdAt;
    this.updatedAt = doc.updatedAt;
  }

  // from
  public get from(): string {
    return this.wrappedFrom;
  }
  public set from(from: string) {
    if (!Validator.isEmail(from)) {
      throw new Error('Invalid `from`');
    }
    this.wrappedFrom = from;
  }

  // to
  public get to(): string {
    return this.wrappedTo;
  }
  public set to(to: string) {
    if (!Validator.isEmail(to)) {
      throw new Error('Invalid `to`');
    }
    this.wrappedTo = to;
  }

  // subject
  public get subject(): string {
    return this.wrappedSubject;
  }
  public set subject(subject: string) {
    this.wrappedSubject = subject;
  }

  // html
  public get html(): string {
    return this.wrappedHtml;
  }
  public set html(html: string) {
    this.wrappedHtml = html;
  }

  // text
  public get text(): string {
    return this.wrappedText;
  }
  public set text(text: string) {
    this.wrappedText = text;
  }

  // builder
  public static create(doc: MessageDto) {
    return new Message(doc);
  }

  // jsonify
  public jsonify() {
    return {
      id: this.id,
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: this.html,
      text: this.text,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export default Message;
