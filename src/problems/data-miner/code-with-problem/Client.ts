import CsvDataMiner from './CsvDataMiner';
import DocDataMiner from './DocDataMiner';
import PdfDataMiner from './PdfDataMiner';

export default class Client {
  public processDocument(miner: CsvDataMiner | DocDataMiner | PdfDataMiner, documentType: string) {
    if (documentType === 'CSV') {
      (miner as CsvDataMiner).mine();
    } else if (documentType === 'DOC') {
      (miner as DocDataMiner).mine();
    } else if (documentType === 'PDF') {
      (miner as PdfDataMiner).mine();
    }
  }
}
