import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LessonHour, PageEvent } from '@school-diary/school-diary/domain';
import { LanguageService } from '@school-diary/school-diary/shared';
import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-lesson-hours-list',
  templateUrl: './lesson-hours-list.component.html'
})
export class LessonHoursListComponent {
  displayedColumns: string[] = ['timeFrom', 'timeTo', 'actions'];
  lessonHours$ = this.lessonHoursFacade.lessonHours$;

  readonly paginationConfig = tableConfig.pagination;

  constructor(private languageService: LanguageService, private lessonHoursFacade: LessonHoursFacade, private router: Router) {}

  changePagination(event: PageEvent): void {
    this.lessonHoursFacade.getLessonHours({ page: event.pageIndex, limit: event.pageSize });
  }

  deleteLessonHour(id: number): void {
    this.lessonHoursFacade.deleteLessonHour({ id });
  }

  selectLessonHour(selectedLessonHour: LessonHour) {
    this.lessonHoursFacade.selectLessonHour(selectedLessonHour);
    this.router.navigate(['/configuration/lesson-hours/edit']);
  }
}
