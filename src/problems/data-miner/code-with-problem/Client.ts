import CsvDataMiner from './CsvDataMiner';
import DocDataMiner from './DocDataMiner';
import PdfDataMiner from './PdfDataMiner';

export default class Client {
  public processDocument(
    miner: CsvDataMiner | DocDataMiner | PdfDataMiner,
    document: File,
    documentType: string,
  ): void {
    if (documentType === 'CSV') {
      (miner as CsvDataMiner).mine(document);
    } else if (documentType === 'DOC') {
      (miner as DocDataMiner).mine(document);
    } else if (documentType === 'PDF') {
      (miner as PdfDataMiner).mine(document);
    }
  }
}
