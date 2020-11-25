import { ItemsPagination } from '@school-diary/school-diary/domain';

export interface GetStudentsRequestPayload extends ItemsPagination {
  unassigned: boolean;
}
