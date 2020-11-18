import { CreateClassUnitRequestPayload } from './create-class-unit.request-payload';

export interface UpdateClassUnitRequestPayload extends CreateClassUnitRequestPayload {
  id: number;
}
