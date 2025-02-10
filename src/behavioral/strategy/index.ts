import OrderEletronics from './OrderEletronics';
import ShippingCommon from './ShippingCommon';

const orderEletronics = new OrderEletronics();
orderEletronics.setValue(100);

const shippingCommon = new ShippingCommon();
orderEletronics.setShipping(shippingCommon);

console.log(`Shipping commom: $${orderEletronics.calculateShipping()}`);
