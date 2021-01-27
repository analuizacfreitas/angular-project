import { Component } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA  } from './directives-exercise-constants';

@Component({
  selector: 'app-directives-exercise',
  templateUrl: './directives-exercise.component.html',
  styleUrls: ['./directives-exercise.component.scss']
})
export class DirectivesExerciseComponent  {

  fruitList = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Pêra',
    'Banana',
    'Graviola'
  ]

  movieList = [{
    name: 'The portrait of a lady on fire',
    year: 2019,
  }, {
    name: 'Disobedience',
    year: 2017,
  }, {
    name: 'Carol',
    year: 2015,
  }];

  mostShow = false;

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  IMAGE_URL = "https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/";

  changeValue() {
    this.mostShow = !this.mostShow
  }

  sum(number1, number2) {
  return number1 + number2;
  }
}
