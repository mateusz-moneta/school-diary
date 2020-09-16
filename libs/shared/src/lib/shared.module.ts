import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CustomMaterialModule } from './custom-material.module';
import { SingleControlComponent } from './components/single-control/single-control.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SingleControlComponent,
    TranslateModule
  ],
  declarations: [SingleControlComponent]
})
export class SharedModule {}
