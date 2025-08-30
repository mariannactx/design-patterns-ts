import { Document } from './Document';

export interface CSV extends Document {
  type: 'CSV';
  file: File;
}
