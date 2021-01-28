import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ngclass-exercise',
  templateUrl: './ngclass-exercise.component.html',
  styleUrls: ['./ngclass-exercise.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgclassExerciseComponent  {

  mustBeGreen = false;

  makeItGreen() {
    this.mustBeGreen = true;
  }

}
