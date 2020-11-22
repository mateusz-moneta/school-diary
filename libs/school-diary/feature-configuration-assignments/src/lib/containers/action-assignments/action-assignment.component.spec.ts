import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAssignmentComponent } from './action-assignment.component';

describe('ActionClassRoomComponent', () => {
  let component: ActionAssignmentComponent;
  let fixture: ComponentFixture<ActionAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
