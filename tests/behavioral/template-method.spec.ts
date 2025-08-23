import Gateway from '../../src/behavioral/template-method/Gateway';
import Debit from '../../src/behavioral/template-method/Debit';
import Credit from '../../src/behavioral/template-method/Credit';
import Cash from '../../src/behavioral/template-method/Cash';
describe('behavioral/template-method', () => {
  const gateway = new Gateway();

  it('calculates debit correctly', () => {
    const debitPayment = new Debit(1000, gateway);
    expect(debitPayment.calcFee()).toBe(4);
    expect(debitPayment.calcDiscount()).toBe(50);
    expect(debitPayment.performCharge()).toBe(954);
  });

  it('calculates credit correctly', () => {
    const creditPayment = new Credit(1000, gateway);
    expect(creditPayment.calcFee()).toBe(50);
    expect(creditPayment.calcDiscount()).toBe(20);
    expect(creditPayment.performCharge()).toBe(1030);
  });

  it('calculates cash correctly', () => {
    const cashPayment = new Cash(1000, gateway);
    expect(cashPayment.calcFee()).toBe(0);
    expect(cashPayment.calcDiscount()).toBe(100);
    expect(cashPayment.performCharge()).toBe(900);
  });
});
