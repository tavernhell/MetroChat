//importing Input is needed to be able to use the @Input() decorator
import { Component, Input, OnInit } from '@angular/core';
import { Metro } from '../../models/metro.model'; //manually imported

@Component({
  selector: 'mc-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {
  @Input() metro: Metro;
  @Input() now: Metro;
  constructor() { }

  ngOnInit() {
  }

}
