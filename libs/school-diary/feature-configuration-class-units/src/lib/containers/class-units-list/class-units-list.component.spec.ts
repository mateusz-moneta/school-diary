import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUnitsListComponent } from './class-units-list.component';

describe('ClassUnitsListComponent', () => {
  let component: ClassUnitsListComponent;
  let fixture: ComponentFixture<ClassUnitsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUnitsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
