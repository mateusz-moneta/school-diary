import { User } from '@school-diary/school-diary/domain';

export interface LoginUserSuccessPayload {
  user: User;
  token: string;
}
