import { Component, OnInit } from '@angular/core';
import { Metro } from '../../models/metro.model'; //manually imported

@Component({
  selector: 'mc-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  metrolist: Metro[] = [];

  constructor() {
    this.metrolist.push(new Metro('ASD','Red',32,125000));
    this.metrolist.push(new Metro('AKE','Green',29,145000));
    this.metrolist.push(new Metro('ASD','Yellow',47,155000));
  }

  ngOnInit() {
  }

}
