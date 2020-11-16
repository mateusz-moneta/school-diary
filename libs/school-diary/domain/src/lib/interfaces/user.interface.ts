import { UserType } from '@school-diary/school-diary/domain';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  type: UserType;
}
