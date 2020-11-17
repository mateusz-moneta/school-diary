import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionClassRoomComponent } from './action-class-room.component';

describe('ActionClassRoomComponent', () => {
  let component: ActionClassRoomComponent;
  let fixture: ComponentFixture<ActionClassRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionClassRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
