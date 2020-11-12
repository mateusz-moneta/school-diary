import { UserType } from '@school-diary/shared';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  user_type: UserType;
}
