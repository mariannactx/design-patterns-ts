import { Document } from './Document';

export interface PDF extends Document {
  type: 'PDF';
  file: File;
}
