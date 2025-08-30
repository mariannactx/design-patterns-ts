import { Document } from './typings/Document';

export default abstract class DataMiner {
  constructor(protected document: Document) {}

  public mine() {
    this.openFile();
    this.extractData();
    this.parseData();
    this.analyzeData();
    this.sendReport();
    this.closeFile();
  }

  protected abstract openFile(): void;

  protected abstract extractData(): void;

  protected abstract parseData(): void;

  private analyzeData() {
    console.log('Analyzing common data.');
  }

  private sendReport() {
    console.log('Sending analysis report.');
  }

  private closeFile() {
    console.log('Closing file.');
  }
}
