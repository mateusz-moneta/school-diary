import { SubjectSuccessPayload } from './subject-success.payload';

export interface GetSubjectsSuccessPayload {
  data: SubjectSuccessPayload[];
  records_count: number;
}
