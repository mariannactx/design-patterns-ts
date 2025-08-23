import Payment from './Payment';

export default class Debit extends Payment {
  public calcFee(): number {
    return 4;
  }

  public calcDiscount(): number {
    return this.value * 0.05;
  }
}
