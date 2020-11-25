import { User } from '@school-diary/school-diary/domain';

export interface GetTeachersSuccessPayload {
  data: User[];
  records_count: number;
}
