import Email from './Email';
import { Subject } from './Subject';

export abstract class Observer {
  private subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.subscribe(this);
  }

  public unsubscribe(): void {
    this.subject.unsubscribe(this);
  }

  public update(message: string): void {
    Email.send(this, message);
  }

  abstract getName(): string;
  abstract getEmail(): string;
}
