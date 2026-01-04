import Article from './Article';
import User from './User';

export default abstract class ArticleState {
  protected name!: string;
  protected article: Article;

  constructor(article: Article) {
    this.article = article;
  }

  public getName(): string {
    return this.name;
  }

  public abstract publish(user: User): void;
  public abstract review(user: User): void;
  public abstract retract(user: User): void;
}
