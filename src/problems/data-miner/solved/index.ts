import Client from './Client';
import { CSV } from './typings/Csv';
import { DOC } from './typings/Doc';
import { PDF } from './typings/Pdf';

const CsvDocument: CSV = {
  type: 'CSV',
  file: new File([''], 'data.csv'),
};

const PdfDocument: PDF = {
  type: 'PDF',
  file: new File([''], 'data.pdf'),
};

const DocDocument: DOC = {
  type: 'DOC',
  file: new File([''], 'data.doc'),
};

const client = new Client();

client.processDocument(CsvDocument);
client.processDocument(PdfDocument);
client.processDocument(DocDocument);
