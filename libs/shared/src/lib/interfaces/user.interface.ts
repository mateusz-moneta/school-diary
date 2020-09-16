import { RegisterData } from './register-data.interface';

export interface User extends RegisterData {
  isActive: boolean;
}
