import User from './User';

type ArticleState = 'draft' | 'moderation' | 'published';

export default class Article {
  public readonly title: string;
  public readonly content: string;
  private state: ArticleState;
  private stateHistory: string[] = [];

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.state = 'draft';
    this.logStateChange('draft');
  }

  public getState(): ArticleState {
    return this.state;
  }

  public getHistory(): string[] {
    return this.stateHistory;
  }

  private logStateChange(newState: ArticleState): void {
    this.stateHistory.push(`[${new Date().toLocaleTimeString()}] State changed to: ${newState}`);
  }

  public publish(user: User): void {
    console.log(`\n🆕 Publishing (state: ${this.state})`);

    switch (this.state) {
      case 'draft':
        this.state = 'moderation';
        this.logStateChange('moderation');
        console.log(`✅ Draft -> Moderation by ${user.role}`);
        break;

      case 'moderation':
        if (user.role === 'admin') {
          this.state = 'published';
          this.logStateChange('published');
          console.log(`✅ Moderation -> Published by ${user.role}`);
        } else {
          console.log(`❌ An '${user.role}' does not have permission to publish.`);
        }
        break;

      case 'published':
        console.log(`❌ Article already published.`);
        break;

      default:
        console.error(`Unknown state: ${this.state}`);
    }
  }

  public review(user: User): void {
    console.log(`\n🆕 Moving to review (state: ${this.state})`);

    switch (this.state) {
      case 'draft':
        console.log(`❌ Article is already in Draft.`);
        break;

      case 'moderation':
        if (user.role === 'admin' || user.role === 'editor') {
          this.state = 'draft';
          this.logStateChange('draft');
          console.log(`✅ Moderation -> Draft by ${user.role}`);
        } else {
          console.log(`❌ An '${user.role}' does not have permission to review.`);
        }
        break;

      case 'published':
        console.log(`❌ Published article cannot be moved back to Draft. Try retracting.`);
        break;

      default:
        console.error(`Unknown state: ${this.state}`);
    }
  }

  public retract(user: User): void {
    console.log(`\n🆕 Retracting (state: ${this.state})`);

    switch (this.state) {
      case 'draft':
        console.log(`❌ Article is already in Draft.`);
        break;

      case 'moderation':
        if (user.role === 'admin' || user.role === 'editor') {
          this.state = 'draft';
          this.logStateChange('draft');
          console.log(`✅ Moderation -> Draft by ${user.role}`);
        } else {
          console.log(`❌ An '${user.role}' does not have permission to retract.`);
        }
        break;

      case 'published':
        if (user.role === 'admin') {
          this.state = 'draft';
          this.logStateChange('draft');
          console.log(`✅ Published -> Draft by ${user.role}`);
        } else {
          console.log(`❌ An '${user.role}' does not have permission to retract.`);
        }
        break;

      default:
        console.error(`Unknown state: ${this.state}`);
    }
  }
}
