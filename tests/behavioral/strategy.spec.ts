import OrderEletronics from '../../src/behavioral/strategy/OrderEletronics';
import OrderFurniture from '../../src/behavioral/strategy/OrderFurniture';
import ShippingCommon from '../../src/behavioral/strategy/ShippingCommon';
import ShippingExpress from '../../src/behavioral/strategy/ShippingExpress';

describe('behavioral/strategy', () => {
  it('calculates common shipping for electronics', () => {
    const orderEletronics = new OrderEletronics(100, new ShippingCommon());
    expect(orderEletronics.calculateShipping()).toBe(5);
  });

  it('calculates express shipping for electronics', () => {
    const orderEletronics = new OrderEletronics(100, new ShippingExpress());
    expect(orderEletronics.calculateShipping()).toBe(10);
  });

  it('calculates common shipping for furniture', () => {
    const orderFurniture = new OrderFurniture(100, new ShippingCommon());
    expect(orderFurniture.calculateShipping()).toBe(5);
  });

  it('calculates express shipping for furniture', () => {
    const orderFurniture = new OrderFurniture(100, new ShippingExpress());
    expect(orderFurniture.calculateShipping()).toBe(10);
  });
});
