import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromDataAccessLogin from './data-access-login.reducer';
import * as DataAccessLoginActions from './data-access-login.actions';

@Injectable()
export class DataAccessLoginEffects {
  loadDataAccessLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataAccessLoginActions.loadDataAccessLogin),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DataAccessLoginActions.loadDataAccessLoginSuccess({
            dataAccessLogin: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DataAccessLoginActions.loadDataAccessLoginFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
