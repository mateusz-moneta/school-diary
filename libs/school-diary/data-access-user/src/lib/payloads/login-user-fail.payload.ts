import { HttpErrorResponse } from '@angular/common/http';

export interface LoginUserFailPayload {
  error: HttpErrorResponse;
}
