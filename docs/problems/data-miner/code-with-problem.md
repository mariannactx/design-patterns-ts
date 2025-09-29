# Code w/ problem: Data miner

A data mining application designed to analyze corporate documents. The system processes documents in various formats, such as PDF, DOC, and CSV, and aims to extract and standardize the data into a uniform output.

## Class diagram

```mermaid
---
title: Classes
---
classDiagram
direction TB

class Client {
  + processDocument(
    miner: CsvDataMiner | DocDataMiner | PdfDataMiner, documentType: string
    ): void
}

class CsvDataMiner {
  - file: File
  + mine(): void
  - openFile(): void
  - extractCsvData(): void
  - parseData(): void
  - analyseData(): void
  - sendReport(): void
  - closeFile(): void
}

class DocDataMiner {
  - file: File
  + mine(): void
  - openFile(): void
  - extractDocData(): void
  - parseData(): void
  - analyseData(): void
  - sendReport(): void
  - closeFile(): void
}

class PdfDataMiner {
  - file: File
  + mine(): void
  - openFile(): void
  - extractPdfData(): void
  - parseData(): void
  - analyseData(): void
  - sendReport(): void
  - closeFile(): void
}

Client --> CsvDataMiner
Client --> DocDataMiner
Client --> PdfDataMiner

```

## Execute

```bash
$ npm run execute:problem data-miner
```

## Tests

### Unit and integration tests

```bash
$ npm run test:problem data-miner
```

### Mutation test

```bash
$ npm run test:mutation:problem data-miner
```
