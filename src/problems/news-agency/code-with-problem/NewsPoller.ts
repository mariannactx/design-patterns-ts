import NewsAgency from './NewsAgency';
import NewsApp from './NewsApp';
import NewsWebsite from './NewsWebsite';

interface Subscription {
  subscriber: NewsWebsite | NewsApp;
  publisher: NewsAgency;
  sent: number;
  interval: number;
  intervalId?: NodeJS.Timeout;
}

export default class NewsPoller {
  private subscriptions: Subscription[] = [];

  private startPolling = (subscription: Subscription): void => {
    subscription.intervalId = setInterval(() => {
      const { subscriber, publisher, sent } = subscription;

      console.log('START -------- Polling news for', subscriber.constructor.name);

      const notSent = publisher['news'].slice(sent);

      if (notSent.length > 0) {
        notSent.forEach((news) => subscriber.receiveNews(news));
        subscription.sent += notSent.length;
      }

      console.log('END -------- Polling news for', subscriber.constructor.name);
    }, subscription.interval);
  };

  public subscribe(subscriber: NewsWebsite | NewsApp, publisher: NewsAgency, interval: number) {
    const subscription: Subscription = {
      subscriber,
      publisher,
      sent: 0,
      interval,
    };

    this.startPolling(subscription);

    this.subscriptions.push(subscription);
  }

  public unsubscribe(subscriber: NewsWebsite | NewsApp, publisher: NewsAgency) {
    this.subscriptions = this.subscriptions.filter(
      ({ subscriber: sub, publisher: pub, intervalId }) => {
        if (sub === subscriber && pub === publisher) {
          clearInterval(intervalId);
          return false;
        }
        return true;
      },
    );
  }
}
