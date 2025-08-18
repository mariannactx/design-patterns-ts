import OrderEletronics from '../../src/behavioral/strategy/OrderEletronics';
import OrderFurniture from '../../src/behavioral/strategy/OrderFurniture';
import ShippingCommon from '../../src/behavioral/strategy/ShippingCommon';
import ShippingExpress from '../../src/behavioral/strategy/ShippingExpress';

describe('behavioral/strategy', () => {
  it('generates correctly each kind of orders', () => {
    const orderEletronics = new OrderEletronics(100, new ShippingCommon());
    const orderFurniture = new OrderFurniture(100, new ShippingCommon());
    expect(orderEletronics.value).toBe(100);
    expect(orderFurniture.value).toBe(100);
    expect(orderEletronics.sector).toBe('Eletronics');
    expect(orderFurniture.sector).toBe('Furniture');
  });

  it('calculates common shipping for electronics', () => {
    const orderEletronics = new OrderEletronics(100, new ShippingCommon());
    const shippingResult = orderEletronics.calculateShipping();
    expect(shippingResult).toBe(5);
  });

  it('calculates express shipping for electronics', () => {
    const orderEletronics = new OrderEletronics(100, new ShippingExpress());
    const shippingResult = orderEletronics.calculateShipping();
    expect(shippingResult).toBe(10);
  });

  it('calculates common shipping for furniture', () => {
    const orderFurniture = new OrderFurniture(100, new ShippingCommon());
    const shippingResult = orderFurniture.calculateShipping();
    expect(shippingResult).toBe(5);
  });

  it('calculates express shipping for furniture', () => {
    const orderFurniture = new OrderFurniture(100, new ShippingExpress());
    const shippingResult = orderFurniture.calculateShipping();
    expect(shippingResult).toBe(10);
  });
});
