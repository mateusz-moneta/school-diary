import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDataAccessLogin from './+state/data-access-login.reducer';
import { DataAccessLoginEffects } from './+state/data-access-login.effects';
import { DataAccessLoginFacade } from './+state/data-access-login.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDataAccessLogin.DATAACCESSLOGIN_FEATURE_KEY,
      fromDataAccessLogin.reducer
    ),
    EffectsModule.forFeature([DataAccessLoginEffects]),
  ],
  providers: [DataAccessLoginFacade],
})
export class DataAccessLoginModule {}
