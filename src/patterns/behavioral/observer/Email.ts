import { Observer } from './Observer';

export default class Email {
  public static send(observer: Observer, message: string): void {
    console.log(`Sending email to ${observer.getEmail()}: ${message}`);
  }
}
