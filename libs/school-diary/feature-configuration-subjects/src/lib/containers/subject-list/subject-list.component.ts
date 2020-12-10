import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from '@school-diary/school-diary/shared';
import { PageEvent, Subject } from '@school-diary/school-diary/domain';
import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-subject-list',
  templateUrl: './subject-list.component.html'
})
export class SubjectListComponent {
  displayedColumns: string[] = ['name', 'shortName', 'createdAt', 'updatedAt', 'actions'];
  subjects$ = this.subjectsFacade.subjects$;

  readonly paginationConfig = tableConfig.pagination;

  constructor(private languageService: LanguageService, private router: Router, private subjectsFacade: SubjectsFacade) {}

  changePagination(event: PageEvent): void {
    this.subjectsFacade.getSubjects({ page: event.pageIndex, limit: event.pageSize });
  }

  deleteSubject(id: number): void {
    this.subjectsFacade.deleteSubject({ id });
  }

  selectSubject(selectedSubject: Subject) {
    this.router.navigate(['/configuration/subjects/edit', selectedSubject.id]);
  }
}
