import { Observer } from './Observer';

export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notifyAll(): void;
}
