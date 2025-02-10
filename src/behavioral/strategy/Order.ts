export default abstract class Order {
  private value!: number;
  private shipping!: Shipping;

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  getShipping(): Shipping {
    return this.shipping;
  }

  setShipping(shipping: Shipping): void {
    this.shipping = shipping;
  }

  calculateShipping(): number {
    return this.shipping.calculate(this.value);
  }
}
