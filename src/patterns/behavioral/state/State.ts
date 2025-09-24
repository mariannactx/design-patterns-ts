import Order from './Order';

export default abstract class State {
  protected abstract exceptionReason: string;

  constructor(protected order: Order) {}

  abstract payingSuccess(): void;
  abstract cancel(): void;
  abstract send(): void;
}
