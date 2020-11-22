import { AssignmentSuccessPayload } from './assignment-success.payload';

export interface GetAssignmentsSuccessPayload {
  data: AssignmentSuccessPayload[];
  records_count: number;
}
