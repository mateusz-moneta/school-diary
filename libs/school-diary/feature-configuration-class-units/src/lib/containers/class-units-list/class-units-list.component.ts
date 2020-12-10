import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClassUnit, PageEvent } from '@school-diary/school-diary/domain';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { LanguageService } from '@school-diary/school-diary/shared';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-class-units-list',
  templateUrl: './class-units-list.component.html'
})
export class ClassUnitsListComponent {
  classUnits$ = this.classUnitsFacade.classUnits$;
  displayedColumns: string[] = ['name', 'classTeacher', 'createdAt', 'updatedAt', 'actions'];

  readonly paginationConfig = tableConfig.pagination;

  constructor(private classUnitsFacade: ClassUnitsFacade, private languageService: LanguageService, private router: Router) {}

  changePagination(event: PageEvent): void {
    this.classUnitsFacade.getClassUnits({ page: event.pageIndex, limit: event.pageSize });
  }

  deleteClassUnit(id: number): void {
    this.classUnitsFacade.deleteClassUnit({ id });
  }

  selectClassUnit(selectedClassUnit: ClassUnit) {
    this.router.navigate(['/configuration/class-units/edit', selectedClassUnit.id]);
  }
}
