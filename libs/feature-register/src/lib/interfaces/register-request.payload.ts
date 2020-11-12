import { UserType } from '@school-diary/shared';

export interface RegisterRequestPayload {
  first_name: string;
  last_name: string;
  user_type: UserType;
  email: string;
  password: string;
}
