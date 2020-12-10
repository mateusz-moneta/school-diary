import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Assignment, PageEvent } from '@school-diary/school-diary/domain';
import { AssignmentsFacade } from '@school-diary/school-diary/data-access-configuration-assignments';
import { LanguageService } from '@school-diary/school-diary/shared';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-assignments-list',
  templateUrl: './assignments-list.component.html'
})
export class AssignmentsListComponent {
  assignments$ = this.assignmentsFacade.assignments$;
  displayedColumns: string[] = ['classUnit', 'student', 'createdAt', 'updatedAt', 'actions'];

  readonly paginationConfig = tableConfig.pagination;

  constructor(private assignmentsFacade: AssignmentsFacade, private languageService: LanguageService, private router: Router) {}

  changePagination(event: PageEvent): void {
    this.assignmentsFacade.getAssignments({ page: event.pageIndex, limit: event.pageSize });
  }

  deleteAssignment(id: number): void {
    this.assignmentsFacade.deleteAssignment({ id });
  }

  selectAssignment(selectedAssignment: Assignment) {
    this.router.navigate(['/configuration/assignments/edit', selectedAssignment.id]);
  }
}
