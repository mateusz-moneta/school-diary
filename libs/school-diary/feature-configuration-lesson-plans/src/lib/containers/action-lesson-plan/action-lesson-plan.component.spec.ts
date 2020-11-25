import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLessonPlanComponent } from './action-lesson-plan.component';

describe('ActionLessonPlanComponent', () => {
  let component: ActionLessonPlanComponent;
  let fixture: ComponentFixture<ActionLessonPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionLessonPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLessonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
