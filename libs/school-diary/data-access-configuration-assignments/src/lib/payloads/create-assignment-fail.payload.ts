import { HttpErrorResponse } from '@angular/common/http';

export interface CreateAssignmentFailPayload {
  error: HttpErrorResponse;
}
