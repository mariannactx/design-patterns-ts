import Payment from './Payment';

export default class Credit extends Payment {
  public calcFee(): number {
    return this.value * 0.05;
  }

  public calcDiscount(): number {
    return this.value * 0.02;
  }
}
