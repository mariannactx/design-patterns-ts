import State from './State';
import StateException from './StateException';

export default class Created extends State {
  protected exceptionReason: string = 'Order not paid.';

  payingSuccess(): void {
    this.order.setState(this.order.getPaid());
  }

  cancel(): void {
    this.order.setState(this.order.getCancelled());
  }

  send(): void {
    throw new StateException(this.exceptionReason);
  }
}
