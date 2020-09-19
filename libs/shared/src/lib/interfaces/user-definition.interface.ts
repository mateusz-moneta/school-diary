import { RegisterData } from './register-data.interface';

export interface UserDefinition extends RegisterData {
  isActive: boolean;
}
