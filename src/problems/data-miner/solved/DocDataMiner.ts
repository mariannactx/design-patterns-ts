import { DOC } from './DocDocument';
import DataMiner from './DataMiner';

export default class DocDataMiner extends DataMiner {
  constructor(document: DOC) {
    super(document);
  }

  protected openFile(): void {
    console.log('Opening DOC file.', this.document.file);
  }

  protected extractData() {
    console.log('Extracting DOC data.');
  }

  protected parseData(): void {
    console.log('Parsing DOC data.');
  }
}
