import { UserType } from '@school-diary/school-diary/domain';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  user_type: UserType;
}
