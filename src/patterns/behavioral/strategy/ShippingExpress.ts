import { Shipping } from './Shipping';

export default class ShippingExpress implements Shipping {
  calculate(value: number): number {
    return value * 0.1;
  }
}
