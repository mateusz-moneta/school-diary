import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LanguageService } from '@school-diary/school-diary/shared';
import { Subject as SubjectItem } from '@school-diary/school-diary/domain';
import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'shortName', 'createdAt', 'updatedAt'];
  subjects: SubjectItem[] = [];

  readonly paginationConfig = tableConfig.pagination;

  private unsubscribe$ = new Subject<void>();

  constructor(private languageService: LanguageService, private subjectsFacade: SubjectsFacade) {}

  ngOnInit(): void {
    this.subjectsFacade.getSubjects();
    this.initDataSource();
  }

  private initDataSource(): void {
    this.subjectsFacade.subjects$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((subjects: SubjectItem[]) => (this.subjects = subjects));
  }
}
