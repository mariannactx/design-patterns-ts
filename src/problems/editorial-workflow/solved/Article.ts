import ArticleState from './ArticleState';
import DraftState from './DraftState';
import ModerationState from './ModerationState';
import PublishedState from './PublishedState';
import User from './User';

export default class Article {
  public readonly title: string;
  public readonly content: string;

  private state: ArticleState;

  public readonly draftState: ArticleState = new DraftState(this);
  public readonly moderationState: ArticleState = new ModerationState(this);
  public readonly publishedState: ArticleState = new PublishedState(this);

  private stateHistory: string[] = [];

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.state = this.draftState;
    this.logStateChange(this.state);
  }

  public publish(user: User): void {
    console.log(`\n🆕 Publishing by ${user.role}`);
    this.state.publish(user);
  }

  public review(user: User): void {
    console.log(`\n🆕 Reviewing by ${user.role}`);
    this.state.review(user);
  }

  public retract(user: User): void {
    console.log(`\n🆕 Retraction by ${user.role}`);
    this.state.retract(user);
  }

  public getState(): ArticleState {
    return this.state;
  }

  public setState(state: ArticleState): void {
    this.state = state;
    this.logStateChange(state);
  }

  public getHistory(): string[] {
    return this.stateHistory;
  }

  private logStateChange(newState: ArticleState): void {
    const message = this.stateHistory.length
      ? `State changed to: ${newState.getName()}`
      : `Initial state: ${newState.getName()}`;

    this.stateHistory.push(`[${new Date().toLocaleTimeString()}] ${message}`);
  }
}
