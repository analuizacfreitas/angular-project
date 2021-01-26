import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindExerciseComponent } from './databind-exercise.component';

describe('DatabindExerciseComponent', () => {
  let component: DatabindExerciseComponent;
  let fixture: ComponentFixture<DatabindExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
