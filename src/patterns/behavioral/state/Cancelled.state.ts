import State from './State';
import StateException from './StateException';

export default class Cancelled extends State {
  protected exceptionReason: string = 'Order cancelled.';

  payingSuccess(): void {
    throw new StateException(this.exceptionReason);
  }

  cancel(): void {
    throw new StateException(this.exceptionReason);
  }

  send(): void {
    throw new StateException(this.exceptionReason);
  }
}
