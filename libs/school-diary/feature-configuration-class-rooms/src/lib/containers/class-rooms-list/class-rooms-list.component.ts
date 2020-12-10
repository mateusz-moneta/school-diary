import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClassRoom, PageEvent } from '@school-diary/school-diary/domain';
import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { LanguageService } from '@school-diary/school-diary/shared';
import { tableConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-class-rooms-list',
  templateUrl: './class-rooms-list.component.html'
})
export class ClassRoomsListComponent {
  classRooms$ = this.classRoomsFacade.classRooms$;
  displayedColumns: string[] = ['designation', 'location', 'floor', 'createdAt', 'updatedAt', 'actions'];

  readonly paginationConfig = tableConfig.pagination;

  constructor(private languageService: LanguageService, private router: Router, private classRoomsFacade: ClassRoomsFacade) {}

  changePagination(event: PageEvent): void {
    this.classRoomsFacade.getClassRooms({ page: event.pageIndex, limit: event.pageSize });
  }

  deleteSubject(id: number): void {
    this.classRoomsFacade.deleteClassRoom({ id });
  }

  selectSubject(selectedClassRoom: ClassRoom) {
    this.router.navigate(['/configuration/class-rooms/edit', selectedClassRoom.id]);
  }
}
