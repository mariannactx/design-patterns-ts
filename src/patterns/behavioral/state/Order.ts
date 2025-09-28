import Cancelled from './Cancelled.state';
import Created from './Created.state';
import Paid from './Paid.state';
import Sent from './Sent.state';
import State from './State';
import StateException from './StateException';

export default class Order {
  private state: State;

  private created: State;
  private cancelled: State;
  private paid: State;
  private sent: State;

  constructor() {
    this.created = new Created(this);
    this.cancelled = new Cancelled(this);
    this.paid = new Paid(this);
    this.sent = new Sent(this);

    this.state = this.created;
  }

  payingSuccess(): void {
    try {
      this.state.payingSuccess();
    } catch (e) {
      this.handleError(e);
    }
  }

  cancel(): void {
    try {
      this.state.cancel();
    } catch (e) {
      this.handleError(e);
    }
  }

  send(): void {
    try {
      this.state.send();
    } catch (e) {
      this.handleError(e);
    }
  }

  handleError(e: unknown): void {
    if (e instanceof StateException) {
      console.log(e.message);
    } else {
      console.log('Unknown error: ', e);
    }
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

  getPaid(): State {
    return this.paid;
  }

  getSent(): State {
    return this.sent;
  }
}
