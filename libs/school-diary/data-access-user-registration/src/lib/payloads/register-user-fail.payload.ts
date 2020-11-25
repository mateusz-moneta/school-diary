import { HttpErrorResponse } from '@angular/common/http';

export interface RegisterUserFailPayload {
  error: HttpErrorResponse;
}
