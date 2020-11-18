import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClassRoom, LessonHour, PageEvent } from '@school-diary/school-diary/domain';
import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { LanguageService } from '@school-diary/school-diary/shared';
import { tableConfig } from '@school-diary/school-diary/config';
import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';

@Component({
  selector: 'school-diary-lesson-hours-list',
  templateUrl: './lesson-hours-list.component.html'
})
export class LessonHoursListComponent implements OnInit {
  displayedColumns: string[] = ['timeFrom', 'timeTo'];
  lessonHours$ = this.lessonHoursFacade.lessonHours$;

  readonly paginationConfig = tableConfig.pagination;

  constructor(private languageService: LanguageService, private router: Router, private lessonHoursFacade: LessonHoursFacade) {}

  ngOnInit(): void {
    this.lessonHoursFacade.getLessonHours();
  }

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
