import ArticleState from './ArticleState';
import User from './User';

export default class DraftState extends ArticleState {
  public name: string = 'Draft';

  publish(): void {
    console.log('❌ Only reviewed articles can be published.');
  }

  review(user: User): void {
    if (user.role !== 'editor' && user.role !== 'admin') {
      console.log('❌ Only editors and admins can send articles for review.');
      return;
    }

    this.article.setState(this.article.moderationState);
    console.log('✅ Article sent for review.');
  }

  retract(): void {
    console.log('❌ The article is already in Draft state.');
  }
}
