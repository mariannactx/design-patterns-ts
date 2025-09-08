import Publisher from './Publisher';

export default class NewsAgency extends Publisher {
  addNews(news: string): void {
    this.addNotification(news);
  }
}
