import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions) {}
}
