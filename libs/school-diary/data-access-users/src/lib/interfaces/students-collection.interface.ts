import { User } from '@school-diary/school-diary/domain';

export interface StudentsCollection {
  data: User[];
  records_count: number;
}
