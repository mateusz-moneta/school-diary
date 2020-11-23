import { User } from '@school-diary/school-diary/domain';

export interface GetStudentsSuccessPayload {
  data: User[];
  records_count: number;
}
