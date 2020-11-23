import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from '@school-diary/school-diary/shared';
import { LessonPlan, PageEvent } from '@school-diary/school-diary/domain';
import { LessonPlansFacade } from '@school-diary/school-diary/data-access-configuration-lesson-plans';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-lesson-plans-list',
  templateUrl: './lesson-plans-list.component.html'
})
export class LessonPlansListComponent {
  displayedColumns = ['created_at', 'updated_at', 'actions'];
  lessonPlans$ = this.lessonPlansFacade.lessonPlans$;

  readonly paginationConfig = tableConfig.pagination;

  constructor(private languageService: LanguageService, private lessonPlansFacade: LessonPlansFacade, private router: Router) {}

  changePagination(event: PageEvent): void {
    this.lessonPlansFacade.getLessonPlans({ page: event.pageIndex, limit: event.pageSize });
  }

  deleteLessonPlan(id: number): void {
    this.lessonPlansFacade.deleteLessonPlan({ id });
  }

  selectLessonPlan(selectedLessonPlan: LessonPlan) {
    this.lessonPlansFacade.selectLessonPlan(selectedLessonPlan);
    this.router.navigate(['/configuration/lesson-plans/edit']);
  }
}
