import Client from './Client';

const app = new Client();
app.findRoute('123 Main St', '456 Oak Ave', 'car');
app.findRoute('123 Main St', '456 Oak Ave', 'walking');
app.findRoute('123 Main St', '456 Oak Ave', 'public_transport');
app.findRoute('Central Park', 'Metropolitan Museum', 'cycling');
app.findRoute('Times Square', 'Statue of Liberty', 'tourist');
