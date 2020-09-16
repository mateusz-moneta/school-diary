import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class CustomMaterialModule {}
