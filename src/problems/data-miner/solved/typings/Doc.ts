import { Document } from './Document';

export interface DOC extends Document {
  type: 'DOC';
  file: File;
}
