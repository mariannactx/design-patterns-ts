import Gateway from '../../src/patterns/behavioral/template-method/Gateway';
import Debit from '../../src/patterns/behavioral/template-method/Debit';
import Credit from '../../src/patterns/behavioral/template-method/Credit';
import Cash from '../../src/patterns/behavioral/template-method/Cash';
describe('behavioral/template-method', () => {
  const gateway = new Gateway();
  jest.spyOn(gateway, 'charge');

  it('throws an error if charge fails', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9);

    const debitPayment = new Debit(1000, gateway);

    expect(() => debitPayment.performCharge()).toThrow('Charge not processed');
  });

  it('calculates debit and charges correctly', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1);

    const debitPayment = new Debit(1000, gateway);

    expect(debitPayment.calcFee()).toBe(4);
    expect(debitPayment.calcDiscount()).toBe(50);
    expect(debitPayment.performCharge()).toBe(954);

    expect(gateway.charge).toHaveBeenCalledWith(954);
  });

  it('calculates credit and charges correctly', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1);

    const creditPayment = new Credit(1000, gateway);
    expect(creditPayment.calcFee()).toBe(50);
    expect(creditPayment.calcDiscount()).toBe(20);
    expect(creditPayment.performCharge()).toBe(1030);

    expect(gateway.charge).toHaveBeenCalledWith(1030);
  });

  it('calculates cash and charges correctly', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1);

    const cashPayment = new Cash(1000, gateway);
    expect(cashPayment.calcFee()).toBe(0);
    expect(cashPayment.calcDiscount()).toBe(100);
    expect(cashPayment.performCharge()).toBe(900);

    expect(gateway.charge).toHaveBeenCalledWith(900);
  });
});
