import Email from '../../../../src/patterns/behavioral/observer/Email';
import Client from '../../../../src/patterns/behavioral/observer/Client';
import Employee from '../../../../src/patterns/behavioral/observer/Employee';
import Newsletter from '../../../../src/patterns/behavioral/observer/Newsletter';
import Partner from '../../../../src/patterns/behavioral/observer/Partner';
import Supplier from '../../../../src/patterns/behavioral/observer/Supplier';

describe('behavioral/observer', () => {
  let mockLog: jest.SpyInstance;

  beforeEach(() => {
    mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    mockLog.mockRestore();
  });

  const message = 'New message 1';

  it('should create subject and observers correctly', () => {
    const newsletter = new Newsletter();

    const client = new Client('Client 1', 'client1@example.com', newsletter);
    const employee = new Employee('Employee 1', 'employee1@example.com', newsletter);
    const partner = new Partner('Partner 1', 'partner1@example.com', newsletter);
    const supplier = new Supplier('Supplier 1', 'supplier1@example.com', newsletter);

    expect(newsletter.getMessages()).toEqual([]);

    expect(client.getName()).toBe('Client 1');
    expect(client.getEmail()).toBe('client1@example.com');
    expect(employee.getName()).toBe('Employee 1');
    expect(employee.getEmail()).toBe('employee1@example.com');
    expect(partner.getName()).toBe('Partner 1');
    expect(partner.getEmail()).toBe('partner1@example.com');
    expect(supplier.getName()).toBe('Supplier 1');
    expect(supplier.getEmail()).toBe('supplier1@example.com');
  });

  it('should register an observer on the subject correctly', () => {
    const newsletter = new Newsletter();
    jest.spyOn(newsletter, 'subscribe');
    const client = new Client('Client 1', 'client1@example.com', newsletter);
    expect(newsletter.subscribe).toHaveBeenCalledWith(client);
  });

  it('should notify all registered observers of new messages', () => {
    const newsletter = new Newsletter();

    const client = new Client('Client 1', 'client1@example.com', newsletter);
    const employee = new Employee('Employee 1', 'employee1@example.com', newsletter);
    const partner = new Partner('Partner 1', 'partner1@example.com', newsletter);
    const supplier = new Supplier('Supplier 1', 'supplier1@example.com', newsletter);

    jest.spyOn(Email, 'send');
    jest.spyOn(client, 'update');
    jest.spyOn(employee, 'update');
    jest.spyOn(partner, 'update');
    jest.spyOn(supplier, 'update');

    newsletter.addMessage(message);

    expect(Email.send).toHaveBeenCalledTimes(4);
    expect(mockLog).toHaveBeenCalledTimes(4);

    expect(mockLog).toHaveBeenCalledWith(`Sending email to ${client.getEmail()}: ${message}`);
    expect(mockLog).toHaveBeenCalledWith(`Sending email to ${employee.getEmail()}: ${message}`);
    expect(mockLog).toHaveBeenCalledWith(`Sending email to ${partner.getEmail()}: ${message}`);
    expect(mockLog).toHaveBeenCalledWith(`Sending email to ${supplier.getEmail()}: ${message}`);

    expect(client.update).toHaveBeenCalledWith(message);
    expect(employee.update).toHaveBeenCalledWith(message);
    expect(partner.update).toHaveBeenCalledWith(message);
    expect(supplier.update).toHaveBeenCalledWith(message);
  });

  it('should not notify removered observers', () => {
    const newsletter = new Newsletter();

    const client = new Client('Client 1', 'client1@example.com', newsletter);
    const employee = new Employee('Employee 1', 'employee1@example.com', newsletter);
    const partner = new Partner('Partner 1', 'partner1@example.com', newsletter);
    const supplier = new Supplier('Supplier 1', 'supplier1@example.com', newsletter);

    jest.spyOn(client, 'update');
    jest.spyOn(employee, 'update');
    jest.spyOn(partner, 'update');
    jest.spyOn(supplier, 'update');

    partner.unsubscribe();

    newsletter.addMessage(message);

    expect(client.update).toHaveBeenCalledWith(message);
    expect(employee.update).toHaveBeenCalledWith(message);
    expect(partner.update).not.toHaveBeenCalledWith(message);
    expect(supplier.update).toHaveBeenCalledWith(message);
  });
});
