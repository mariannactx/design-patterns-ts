import State from './State';
import StateException from './StateException';

export default class Payed extends State {
  protected exceptionReason: string = 'Order already payed.';
  payingSuccess(): void {
    throw new StateException(this.exceptionReason);
  }

  cancel(): void {
    this.order.setState(this.order.cancelled);
  }

  send(): void {
    this.order.setState(this.order.sent);
  }
}
