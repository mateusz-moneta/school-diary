import { UserType } from '@school-diary/school-diary/domain';

export interface RegisterUserRequestPayload {
  first_name: string;
  last_name: string;
  type: UserType;
  email: string;
  password: string;
}
