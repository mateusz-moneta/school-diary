import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';

import * as fromClassUnits from './+state/class-units.reducer';
import { ClassUnitsEffects } from './+state/class-units.effects';
import { ClassUnitsFacade } from './+state/class-units.facade';
import { ClassUnitsApiService } from './services/class-units-api.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromClassUnits.CLASS_UNITS_FEATURE_KEY,
      fromClassUnits.classUnitsReducer
    ),
    EffectsModule.forFeature([ClassUnitsEffects])
  ],
  providers: [ClassUnitsApiService, ClassUnitsFacade, DataPersistence]
})
export class SchoolDiaryDataAccessConfigurationClassUnitsModule {}
