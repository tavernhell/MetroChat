//importing Input is needed to be able to use the @Input() decorator
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Metro } from '../../models/metro.model'; //manually imported

@Component({
  selector: 'mc-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {
  @Input() metro: Metro;
  @Input() now: number;

  @Output() departing = new EventEmitter<string>(); //defines an output property: this will be called as an event from the father

  state: Object; //this will be the class of the containing div
  waitTime: number;
  departureTime: number;
  constructor() { }

  ngOnInit() {
    //set departureTime to ms
    this.departureTime = this.metro.waitTime;
    //time remaining for departure
    this.waitTime = this.departureTime - this.now;
    let x = setInterval(() => {
      this.waitTime  -= 1000;
      if (this.waitTime <=0) {
        //interrupt the timer and send the event
        clearInterval(x);
        //this will emit the id of the train
        this.departing.emit(this.metro.idt);
        //modify the state of the component (aka the CSS)
        this.state = {'display' : 'none'};
      }
    },
    1000);
  }
}
