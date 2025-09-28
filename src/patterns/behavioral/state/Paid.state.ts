import State from './State';
import StateException from './StateException';

export default class Paid extends State {
  protected exceptionReason: string = 'Order already paid.';

  payingSuccess(): void {
    throw new StateException(this.exceptionReason);
  }

  cancel(): void {
    this.order.setState(this.order.getCancelled());
  }

  send(): void {
    this.order.setState(this.order.getSent());
  }
}
