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

  closeDetail() {
    this.train = null;
  }

}
