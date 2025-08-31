import { Observer } from './Observer';
import { Subject } from './Subject';

export default class Newsletter implements Subject {
  private observers: Observer[] = [];
  private messages: string[] = [];

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyAll(): void {
    const lastMessage = this.messages[this.messages.length - 1];
    this.observers.forEach((observer) => observer.update(lastMessage));
  }

  public getMessages(): string[] {
    return this.messages;
  }

  public addMessage(message: string): void {
    this.messages.push(message);
    this.notifyAll();
  }
}
