export default class NewsAgency {
  private news: string[] = [];

  public addNews(headline: string) {
    this.news.push(headline);
  }
}
