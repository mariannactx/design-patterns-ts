import ArticleState from './ArticleState';
import User from './User';

export default class ModerationState extends ArticleState {
  public name: string = 'Moderation';

  publish(user: User): void {
    if (user.role !== 'admin') {
      console.log('❌ Only admins can publish articles.');
      return;
    }

    this.article.setState(this.article.publishedState);
    console.log('✅ Article published.');
  }

  review(): void {
    console.log('❌ The article is already in Moderation state.');
  }

  retract(user: User): void {
    if (user.role !== 'admin' && user.role !== 'editor') {
      console.log('❌ Only admins and editors can retract articles to Draft state.');
      return;
    }

    this.article.setState(this.article.draftState);
    console.log('✅ Article retracted to draft.');
  }
}
