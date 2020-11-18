import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { fromClassUnitsActions } from './class-units.actions';
import { ClassUnitsApiService } from '../services/class-units-api.service';
import { ClassUnitsPartialState } from './class-units.reducer';
import { CreateClassUnitSuccessPayload } from '../payloads/create-class-unit-success.payload';
import { CreateClassUnitFailPayload } from '../payloads/create-class-unit-fail.payload';
import { DeleteClassUnitSuccessPayload } from '../payloads/delete-class-unit-success.payload';
import { DeleteClassUnitFailPayload } from '../payloads/delete-class-unit-fail.payload';
import { GetClassUnitsSuccessPayload } from '../payloads/get-class-units-success.payload';
import { GetClassUnitsFailPayload } from '../payloads/get-class-units-fail.payload';
import { UpdateClassUnitSuccessPayload } from '../payloads/update-class-unit-success.payload';
import { UpdateClassUnitFailPayload } from '../payloads/update-class-unit-fail.payload';

@Injectable()
export class ClassUnitsEffects {

  @Effect()
  createClassRoom$ = this.dp.pessimisticUpdate(fromClassUnitsActions.Types.CreateClassUnit, {
    run: (action: fromClassUnitsActions.CreateClassUnit) =>
      this.classRoomsApiService.createClassUnit(action.payload)
        .pipe(
          map((payload: CreateClassUnitSuccessPayload) => new fromClassUnitsActions.CreateClassUnitSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/class-units/list'])
          })
        ),
    onError: (action: fromClassUnitsActions.CreateClassUnit, payload: CreateClassUnitFailPayload) =>
      new fromClassUnitsActions.CreateClassUnitFail(payload)
  });

  @Effect()
  deleteClassRoom$ = this.dp.pessimisticUpdate(fromClassUnitsActions.Types.DeleteClassUnit, {
    run: (action: fromClassUnitsActions.DeleteClassUnit) =>
      this.classRoomsApiService.deleteClassUnit(action.payload)
        .pipe(
          map((payload: DeleteClassUnitSuccessPayload) => new fromClassUnitsActions.DeleteClassUnitSuccess(payload)),
        ),
    onError: (action: fromClassUnitsActions.DeleteClassUnit, payload: DeleteClassUnitFailPayload) =>
      new fromClassUnitsActions.DeleteClassUnitFail(payload)
  });

  @Effect()
  getClassRooms$ = this.dp.fetch(fromClassUnitsActions.Types.GetClassUnits, {
    run: (action: fromClassUnitsActions.GetClassUnits) =>
      this.classRoomsApiService.getClassUnits(action.payload)
        .pipe(
          map((payload: GetClassUnitsSuccessPayload) => new fromClassUnitsActions.GetClassUnitsSuccess(payload))
        ),
    onError: (action: fromClassUnitsActions.GetClassUnits, payload: GetClassUnitsFailPayload) =>
      new fromClassUnitsActions.GetClassUnitsFail(payload)
  });

  @Effect()
  updateClassRoom$ = this.dp.pessimisticUpdate(fromClassUnitsActions.Types.UpdateClassUnit, {
    run: (action: fromClassUnitsActions.UpdateClassUnit) =>
      this.classRoomsApiService.updateClassUnit(action.payload)
        .pipe(
          map((payload: UpdateClassUnitSuccessPayload) => new fromClassUnitsActions.UpdateClassUnitSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/class-units/list'])
          })
        ),
    onError: (action: fromClassUnitsActions.UpdateClassUnit, payload: UpdateClassUnitFailPayload) =>
      new fromClassUnitsActions.UpdateClassUnitFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<ClassUnitsPartialState>,
    private classRoomsApiService: ClassUnitsApiService,
    private router: Router
  ) {}
}
