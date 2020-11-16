import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { SingleControlComponent } from './single-control/single-control.component';

@NgModule({
  declarations: [SingleControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [SingleControlComponent]
})
export class SchoolDiaryUiSingleControlModule {}
