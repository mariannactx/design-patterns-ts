export type DocumentTypes = 'CSV' | 'PDF' | 'DOC';

export interface Document {
  type: DocumentTypes;
  file: File;
}
