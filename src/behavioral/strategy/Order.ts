export default abstract class Order {
  public value!: number;
  private shipping!: Shipping;
  protected sector!: string;

  constructor(value: number, shipping: Shipping) {
    this.value = value;
    this.shipping = shipping;
  }

  public calculateShipping(): number {
    return this.shipping.calculate(this.value);
  }
}
