import Payment from './Payment';

export default class Cash extends Payment {
  public calcDiscount(): number {
    return this.value * 0.1;
  }
}
