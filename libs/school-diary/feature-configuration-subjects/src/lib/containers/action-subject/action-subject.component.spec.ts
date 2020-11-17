import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSubjectComponent } from './action-subject.component';

describe('NewSubjectComponent', () => {
  let component: ActionSubjectComponent;
  let fixture: ComponentFixture<ActionSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
