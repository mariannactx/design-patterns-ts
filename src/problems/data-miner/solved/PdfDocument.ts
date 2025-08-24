import { TypeDocument } from './TypeDocument';

export interface PDF extends TypeDocument {
  type: 'PDF';
  file: File;
}
