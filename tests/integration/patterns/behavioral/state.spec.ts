import Order from '../../../../src/patterns/behavioral/state/Order';

describe('behavioral/state', () => {
  let order: Order;
  let mockConsole: jest.SpyInstance;

  const errorMessage = 'Operation not supported.';
  const createdReason = 'Order not paid.';
  const paidReason = 'Order already paid.';
  const sentReason = 'Order already sent.';
  const cancelledReason = 'Order cancelled.';

  beforeEach(() => {
    mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
    order = new Order();
  });

  afterEach(() => {
    mockConsole.mockRestore();
  });

  it('should start in Created state', () => {
    expect(order['state']).toBe(order.getCreated());
  });

  it('should call setState and change state', () => {
    order.setState(order.getPaid());
    expect(order['state']).toBe(order.getPaid());
  });

  it('should transition to Paid state after payingSuccess', () => {
    order.payingSuccess();
    expect(order['state']).toBe(order.getPaid());
  });

  it('should transition to Sent state after payingSuccess and send', () => {
    order.payingSuccess();
    order.send();
    expect(order['state']).toBe(order.getSent());
  });

  it('should transition to Cancelled state after cancel on Created state', () => {
    order.cancel();
    expect(order['state']).toBe(order.getCancelled());
  });

  it('should transition to Cancelled state after cancel on Paid state', () => {
    order.payingSuccess();
    order.cancel();

    expect(order['state']).toBe(order.getCancelled());
  });

  it('should handle unknown errors in handleError', () => {
    const error = new Error('Unknown');
    order.handleError(error);
    expect(mockConsole).toHaveBeenCalledWith('Unknown error: ', error);
  });

  it('should not allow any operation after cancel', () => {
    order.cancel();

    order.payingSuccess();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${cancelledReason}`);

    order.send();
    expect(mockConsole).toHaveBeenNthCalledWith(2, `${errorMessage} ${cancelledReason}`);

    order.cancel();
    expect(mockConsole).toHaveBeenNthCalledWith(3, `${errorMessage} ${cancelledReason}`);

    expect(order['state']).toBe(order.getCancelled());
  });

  it('should not allow send before payingSuccess', () => {
    order.send();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${createdReason}`);
    expect(order['state']).toBe(order.getCreated());
  });

  it('should not allow any operation after send', () => {
    order.payingSuccess();
    order.send();

    order.payingSuccess();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${sentReason}`);

    order.send();
    expect(mockConsole).toHaveBeenNthCalledWith(2, `${errorMessage} ${sentReason}`);

    order.cancel();
    expect(mockConsole).toHaveBeenNthCalledWith(3, `${errorMessage} ${sentReason}`);

    expect(order['state']).toBe(order.getSent());
  });

  it('should not allow payingSuccess after payingSuccess', () => {
    order.payingSuccess();
    order.payingSuccess();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${paidReason}`);
    expect(order['state']).toBe(order.getPaid());
  });
});
