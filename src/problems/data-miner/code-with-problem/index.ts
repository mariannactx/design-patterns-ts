import Client from './Client';
import CsvDataMiner from './CsvDataMiner';
import DocDataMiner from './DocDataMiner';
import PdfDataMiner from './PdfDataMiner';

const client = new Client();

const csv = new File([''], 'data.csv');
const doc = new File([''], 'data.docx');
const pdf = new File([''], 'data.pdf');

const csvDataMiner = new CsvDataMiner();
client.processDocument(csvDataMiner, csv, 'CSV');

const docDataMiner = new DocDataMiner();
client.processDocument(docDataMiner, doc, 'DOC');

const pdfDataMiner = new PdfDataMiner();
client.processDocument(pdfDataMiner, pdf, 'PDF');
