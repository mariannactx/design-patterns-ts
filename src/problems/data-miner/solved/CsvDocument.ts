import { TypeDocument } from './TypeDocument';

export interface CSV extends TypeDocument {
  type: 'CSV';
  file: File;
}
