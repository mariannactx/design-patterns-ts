import Order from './Order';

export default class OrderEletronics extends Order {
  constructor(value: number, shipping: Shipping) {
    super(value, shipping);

    this.sector = 'Eletronics';
  }
}
