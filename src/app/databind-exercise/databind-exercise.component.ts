import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-databind-exercise',
  templateUrl: './databind-exercise.component.html',
  styleUrls: ['./databind-exercise.component.scss']
})
export class DatabindExerciseComponent implements OnInit {

  @Input() word!: string;
  @Output() clicked = new EventEmitter();

  imageURL = "https://images.unsplash.com/photo-1544568100-847a948585b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
  initialValue = "valor inicial";
  isDisabled = true;
  accessibilityText = "Accessibility text"

  inputValue = ''
 
  counterValue = 10;

  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  
  }

  onClick($event) {
    console.log("Clicou!", $event);
  }

  wroteSomething($event) {
    this.inputValue = $event.target.value;
    console.log("Digitou!", $event);
  }

  mousePassed() {
    console.log("Alguém passou o mouse");
  }

  onClickEmitterButton($event) {
    console.log("Devo emitir informações para o componente pai");
    this.clicked.emit($event);
  }
  
  /*getImageURL() {
    return this.imageURL
  }*/

}
