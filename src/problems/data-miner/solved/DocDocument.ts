import { TypeDocument } from './TypeDocument';

export interface DOC extends TypeDocument {
  type: 'DOC';
  file: File;
}
