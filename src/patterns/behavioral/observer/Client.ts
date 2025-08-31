import { Observer } from './Observer';
import { Subject } from './Subject';

export default class Client extends Observer {
  constructor(
    private name: string,
    private email: string,
    subject: Subject,
  ) {
    super(subject);
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }
}
