import Subscriber from './Subscriber';

export default class Publisher {
  private notifications: string[] = [];
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  addNotification(notification: string): void {
    this.notifications.push(notification);
    this.notifySubscribers();
  }

  private notifySubscribers(): void {
    const lastNotification = this.notifications[this.notifications.length - 1];
    this.subscribers.forEach((sub) => sub.notify(lastNotification));
  }
}
