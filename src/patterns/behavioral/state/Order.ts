import Cancelled from './Cancelled.state';
import Created from './Created.state';
import Payed from './Payed.state';
import Sent from './Sent.state';
import State from './State';

export default class Order {
  private state: State;

  private created: State;
  private cancelled: State;
  private payed: State;
  private sent: State;

  constructor() {
    this.created = new Created(this);
    this.cancelled = new Cancelled(this);
    this.payed = new Payed(this);
    this.sent = new Sent(this);

    this.state = this.created;
  }

  setState(state: State): void {
    this.state = state;
  }

  getCreated(): State {
    return this.created;
  }

  getCancelled(): State {
    return this.cancelled;
  }
}
