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
    this.metrolist.push({ idt: 'ASD', line: 'Red', numChatting: 32, waitTime: 125000 });
    this.metrolist.push({ idt: 'AKE', line: 'Green', numChatting: 29, waitTime: 145000 });
    this.metrolist.push({ idt: 'ASD', line: 'Yellow', numChatting: 47, waitTime: 155000 });
  }

  ngOnInit() {
  }

}
