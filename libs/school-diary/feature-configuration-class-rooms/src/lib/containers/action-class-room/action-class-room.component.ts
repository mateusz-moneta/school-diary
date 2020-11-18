import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Action, ClassRoom } from '@school-diary/school-diary/domain';
import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { LanguageService } from '@school-diary/school-diary/shared';

@Component({
  selector: 'school-diary-action-class-room',
  templateUrl: './action-class-room.component.html'
})
export class ActionClassRoomComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  classRoomForm: FormGroup;
  selectedClassRoom: ClassRoom;
  titleTranslationKey = 'CONFIGURATION-CLASS-ROOMS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private classRoomsFacade: ClassRoomsFacade
  ) {}

  ngOnInit(): void {
    this.initClassRoomForm();
    this.initSelectedClassRoom();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.selectedClassRoom) {
      this.classRoomsFacade.unselectClassRoom();
    }
  }

  executeAction(): void {
    const baseRequestPayload = {
      designation: this.classRoomForm.get('designation').value,
      floor: this.classRoomForm.get('floor').value,
      location: this.classRoomForm.get('location').value
    };

    if (this.action === Action.CREATE) {
      this.classRoomsFacade.createClassRoom(baseRequestPayload);
      return;
    }

    this.classRoomsFacade.updateClassRoom({
      id: this.selectedClassRoom.id,
      ...baseRequestPayload
    });
  }

  private initClassRoomForm(): void {
    this.classRoomForm = this.formBuilder.group({
      designation: ['', [Validators.required]],
      floor: ['', [Validators.required, Validators.min(0), Validators.max(3)]],
      location: ['', [Validators.required]],
    });
  }

  private initSelectedClassRoom(): void {
    this.classRoomsFacade.selectedClassRoom$
      .pipe(
        filter(selectedClassRoom => !!selectedClassRoom),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedClassRoom: ClassRoom) => {
        this.action = Action.EDIT;
        this.selectedClassRoom = selectedClassRoom;
        this.titleTranslationKey = 'CONFIGURATION-CLASS-ROOMS.EDITOR-TITLE';

        this.classRoomForm.patchValue(selectedClassRoom);
      });
  }
}
