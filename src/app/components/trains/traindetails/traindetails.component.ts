import { Component, Input, OnInit } from '@angular/core';
import { Metro } from 'src/app/models/metro.model';

@Component({
  selector: 'mc-traindetails',
  templateUrl: './traindetails.component.html',
  styleUrls: ['./traindetails.component.css']
})
export class TraindetailsComponent implements OnInit {
  @Input() train: Metro;

  constructor() { }

  ngOnInit() {
  }

  //this will make the if in the template to avaluate to false, and the div won't be shown
  closeDetail() {
    this.train = null;
  }
}
