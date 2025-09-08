import Subscriber from './Subscriber';

export default class NewsWebsite extends Subscriber {
  public notify(headline: string): void {
    console.log(`Website: New notification - ${headline}`);
  }
}
