import { CreateAssignmentRequestPayload } from './create-assignment.request-payload';

export interface UpdateAssignmentRequestPayload extends CreateAssignmentRequestPayload {
  id: number;
}
