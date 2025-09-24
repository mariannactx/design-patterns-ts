import State from './State';
import StateException from './StateException';

export default class Created extends State {
  protected exceptionReason: string = 'Order not payed.';

  payingSuccess(): void {
    this.order.setState(this.order.payed);
  }

  cancel(): void {
    this.order.setState(this.order.cancelled);
  }

  send(): void {
    throw new StateException(this.exceptionReason);
  }
}
