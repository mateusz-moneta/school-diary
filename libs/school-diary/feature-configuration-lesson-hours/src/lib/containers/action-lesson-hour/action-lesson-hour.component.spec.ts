import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLessonHourComponent } from './action-lesson-hour.component';

describe('ActionLessonHourComponent', () => {
  let component: ActionLessonHourComponent;
  let fixture: ComponentFixture<ActionLessonHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionLessonHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLessonHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
