export default class DocDataMiner {
  public mine(file: File) {
    this.file = file;

    this.openFile();
    this.extractDocData();
    this.parseData();
    this.analyzeData();
    this.sendReport();
    this.closeFile();
  }

  private file!: File;

  private openFile() {
    console.log('Opening DOC file.', this.file);
  }

  private extractDocData() {
    console.log('Extracting DOC data.');
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
    console.log('Closing DOC file.');
  }
}

// csv-data-miner.ts

// pdf-data-miner.ts

// client.ts
