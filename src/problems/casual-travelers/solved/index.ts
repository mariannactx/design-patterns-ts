import Client from './Client';

const client = new Client();

client.buildRoute('A', 'B', 'car');
client.buildRoute('A', 'B', 'walking');
client.buildRoute('A', 'B', 'publicTransport');
client.buildRoute('A', 'B', 'cycling');
client.buildRoute('A', 'B', 'touristic');
