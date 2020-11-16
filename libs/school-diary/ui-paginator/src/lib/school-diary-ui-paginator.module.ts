import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { CustomPageComponent } from './components/custom-page/custom-page.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [CustomPageComponent, PaginatorComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatSelectModule, ReactiveFormsModule, TranslateModule],
  exports: [CustomPageComponent, PaginatorComponent]
})
export class SchoolDiaryUiPaginatorModule {}
