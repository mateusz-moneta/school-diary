import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsListComponent } from './class-rooms-list.component';

describe('ClassRoomsListComponent', () => {
  let component: AssignmentsListComponent;
  let fixture: ComponentFixture<AssignmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
