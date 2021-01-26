import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = "do tipo string";
  title = "Seja bem vindo! :)";

  constructor() { }
  
  recievedEvent($event) {
    console.log("AppComponent: EVENTO RECEBIDO!", $event);
  }

}