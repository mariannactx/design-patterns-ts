import CsvDataMiner from './CsvDataMiner';
import PdfDataMiner from './PdfDataMiner';
import DocDataMiner from './DocDataMiner';
import { CSV } from './CsvDocument';
import { PDF } from './PdfDocument';
import { DOC } from './DocDocument';
import DataMiner from './DataMiner';
import { TypeDocument } from './TypeDocument';

export default class Client {
  public processDocument(document: TypeDocument) {
    let dataMiner: DataMiner;

    switch (document.type) {
      case 'CSV':
        dataMiner = new CsvDataMiner(document as CSV);
        break;
      case 'PDF':
        dataMiner = new PdfDataMiner(document as PDF);
        break;
      case 'DOC':
        dataMiner = new DocDataMiner(document as DOC);
        break;
      default:
        throw new Error('Unsupported file type');
    }

    dataMiner.mine();
  }
}
