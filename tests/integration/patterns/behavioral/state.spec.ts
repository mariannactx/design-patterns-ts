import Order from '../../../../src/patterns/behavioral/state/Order';

describe('behavioral/state', () => {
  let order: Order;
  let mockConsole: jest.SpyInstance;

  const errorMessage = 'Operation not supported.';
  const createdErrorReason = 'Order not paid.';
  const paidErrorReason = 'Order already paid.';
  const sentErrorReason = 'Order already sent.';
  const cancelledErrorReason = 'Order cancelled.';

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
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${cancelledErrorReason}`);

    order.send();
    expect(mockConsole).toHaveBeenNthCalledWith(2, `${errorMessage} ${cancelledErrorReason}`);

    order.cancel();
    expect(mockConsole).toHaveBeenNthCalledWith(3, `${errorMessage} ${cancelledErrorReason}`);

    expect(order['state']).toBe(order.getCancelled());
  });

  it('should not allow send before payingSuccess', () => {
    order.send();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${createdErrorReason}`);
    expect(order['state']).toBe(order.getCreated());
  });

  it('should not allow any operation after send', () => {
    order.payingSuccess();
    order.send();

    order.payingSuccess();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${sentErrorReason}`);

    order.send();
    expect(mockConsole).toHaveBeenNthCalledWith(2, `${errorMessage} ${sentErrorReason}`);

    order.cancel();
    expect(mockConsole).toHaveBeenNthCalledWith(3, `${errorMessage} ${sentErrorReason}`);

    expect(order['state']).toBe(order.getSent());
  });

  it('should not allow payingSuccess after payingSuccess', () => {
    order.payingSuccess();
    order.payingSuccess();
    expect(mockConsole).toHaveBeenCalledWith(`${errorMessage} ${paidErrorReason}`);
    expect(order['state']).toBe(order.getPaid());
  });
});
