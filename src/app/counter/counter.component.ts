import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() value = 0;
  @Output() valueChange = new EventEmitter();

  increase() {
    this.value = this.value + 1;
    this.valueChange.emit(this.value );
  }

  decrease() {
    this.value = this.value - 1; 
    this.valueChange.emit(this.value );
  }

}
