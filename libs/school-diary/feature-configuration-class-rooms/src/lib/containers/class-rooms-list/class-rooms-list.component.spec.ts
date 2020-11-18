import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomsListComponent } from './class-rooms-list.component';

describe('ClassRoomsListComponent', () => {
  let component: ClassRoomsListComponent;
  let fixture: ComponentFixture<ClassRoomsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRoomsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
