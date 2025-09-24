import State from './State';
import StateException from './StateException';

export default class Sent extends State {
  protected exceptionReason: string = 'Order already sent.';

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
