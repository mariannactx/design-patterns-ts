import Gateway from './Gateway';

export default abstract class Payment {
  protected value: number;
  private gateway: Gateway;

  constructor(value: number, gateway: Gateway) {
    this.value = value;
    this.gateway = gateway;
  }

  public calcFee(): number {
    return 0;
  }

  public abstract calcDiscount(): number;

  public performCharge(): number {
    const finalValue = this.value + this.calcFee() - this.calcDiscount();
    return this.gateway.charge(finalValue);
  }
}
