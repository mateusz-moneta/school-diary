import { UserTypeDefinition } from '@school-diary/shared';

export interface RegisterData {
  firstName: string;
  lastName: string;
  userType: UserTypeDefinition;
  email: string;
  password: string;
}
