export default class PdfDataMiner {
  public mine(file: File) {
    this.file = file;

    this.openFile();
    this.extractPdfData();
    this.parseData();
    this.analyzeData();
    this.sendReport();
    this.closeFile();
  }

  private file!: File;

  private openFile() {
    console.log('Opening PDF file.', this.file);
  }

  private extractPdfData() {
    console.log('Extracting PDF data.');
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
    console.log('Closing PDF file.');
  }
}
