import { PDF } from './typings/Pdf';
import DataMiner from './DataMiner';

export default class PdfDataMiner extends DataMiner {
  constructor(document: PDF) {
    super(document);
  }

  protected openFile(): void {
    console.log('Opening PDF file.', this.document.file);
  }

  protected extractData() {
    console.log('Extracting PDF data.');
  }

  protected parseData(): void {
    console.log('Parsing PDF data.');
  }
}
