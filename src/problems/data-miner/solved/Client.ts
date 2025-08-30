import CsvDataMiner from './CsvDataMiner';
import PdfDataMiner from './PdfDataMiner';
import DocDataMiner from './DocDataMiner';
import { DocumentTypes, Document } from './typings/Document';
import { CSV } from './typings/Csv';
import { PDF } from './typings/Pdf';
import { DOC } from './typings/Doc';
import DataMiner from './DataMiner';

type DataMinerFactory = (document: Document) => DataMiner;

export default class Client {
  public processDocument(document: Document) {
    const dataMiner: DataMiner = this.createDataMiner(document);
    dataMiner.mine();
  }

  private miners: Record<DocumentTypes, DataMinerFactory> = {
    CSV: (document) => new CsvDataMiner(document as CSV),
    PDF: (document) => new PdfDataMiner(document as PDF),
    DOC: (document) => new DocDataMiner(document as DOC),
  };

  public createDataMiner(document: Document) {
    return this.miners[document.type](document);
  }
}
