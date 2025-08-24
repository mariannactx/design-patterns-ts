export default class CsvDataMiner {
  public mine(file: File) {
    this.file = file;

    this.openFile();
    this.extractCsvData();
    this.parseData();
    this.analyzeData();
    this.sendReport();
    this.closeFile();
  }

  private file!: File;

  private openFile() {
    console.log('Opening CSV file.', this.file);
  }

  private extractCsvData() {
    console.log('Extracting CSV data.');
  }

  private parseData() {
    console.log('Parsing common data format.');
  }

  private analyzeData() {
    console.log('Analyzing common data.');
  }

  private sendReport() {
    console.log('Sending analysis report.');
  }

  private closeFile() {
    console.log('Closing CSV file.');
  }
}
