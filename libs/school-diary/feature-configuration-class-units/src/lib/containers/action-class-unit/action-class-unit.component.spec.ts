import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionClassUnitComponent } from './action-class-unit.component';

describe('ActionClassUnitComponent', () => {
  let component: ActionClassUnitComponent;
  let fixture: ComponentFixture<ActionClassUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionClassUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionClassUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
