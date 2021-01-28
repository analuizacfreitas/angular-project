import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassExerciseComponent } from './ngclass-exercise.component';

describe('NgclassExerciseComponent', () => {
  let component: NgclassExerciseComponent;
  let fixture: ComponentFixture<NgclassExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
