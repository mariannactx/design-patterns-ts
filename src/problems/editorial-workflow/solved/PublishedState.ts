import ArticleState from './ArticleState';
import User from './User';

export default class PublishedState extends ArticleState {
  public name: string = 'Published';

  publish(): void {
    console.log('❌ The article is already in published state.');
  }

  review(user: User): void {
    if (user.role !== 'admin' && user.role !== 'editor') {
      console.log('❌ Only admins and editors can send articles for review.');
      return;
    }

    this.article.setState(this.article.moderationState);
    console.log('✅ Article sent for review.');
  }

  retract(user: User): void {
    if (user.role !== 'admin') {
      console.log('❌ Only admins can remove live articles.');
      return;
    }

    this.article.setState(this.article.draftState);
    console.log('✅ Article retracted to draft.');
  }
}
