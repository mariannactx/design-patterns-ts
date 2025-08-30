import Order from './Order';
import { Shipping } from './Shipping';

export default class OrderFurniture extends Order {
  constructor(value: number, shipping: Shipping) {
    super(value, shipping);
    this.sector = 'Furniture';
  }
}
