import { CSV } from './CsvDocument';
import DataMiner from './DataMiner';

export default class CsvDataMiner extends DataMiner {
  constructor(document: CSV) {
    super(document);
  }

  protected openFile(): void {
    console.log('Opening CSV file.', this.document.file);
  }

  protected extractData() {
    console.log('Extracting CSV data.');
  }

  protected parseData(): void {
    console.log('Parsing CSV data.');
  }
}
