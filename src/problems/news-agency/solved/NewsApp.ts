import Subscriber from './Subscriber';

export default class NewsApp extends Subscriber {
  public notify(headline: string): void {
    console.log(`App: New notification - ${headline}`);
  }
}
