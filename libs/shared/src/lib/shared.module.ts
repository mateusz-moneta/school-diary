import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

import { CustomMaterialModule } from './custom-material.module';
import { SingleControlComponent } from './components/single-control/single-control.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    TranslateModule
  ],
  exports: [
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SingleControlComponent,
    ToastrModule,
    TranslateModule
  ],
  declarations: [SingleControlComponent]
})
export class SharedModule {}
