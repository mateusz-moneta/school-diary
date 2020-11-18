import { CreateSubjectRequestPayload } from './create-subject.request-payload';

export interface UpdateSubjectRequestPayload extends CreateSubjectRequestPayload {
  id: number;
}
