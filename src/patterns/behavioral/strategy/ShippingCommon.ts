import { Shipping } from './Shipping';

export default class ShippingCommon implements Shipping {
  calculate(value: number): number {
    return value * 0.05;
  }
}
