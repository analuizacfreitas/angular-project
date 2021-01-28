import { Component, OnInit, Input, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() title = "Seja bem vindo!";

  constructor() { 
    console.log("Constructor");
   }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

}
