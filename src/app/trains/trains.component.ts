import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  metrolist: { idt: string; line: string; numChatting: number; waitTime: number; }[];

  constructor() {
    this.metrolist =
    [
      {idt:'ASD', line:'Red', numChatting:32, waitTime:125000},
      {idt:'AKE', line:'Green', numChatting:29, waitTime:145000},
      {idt:'ASD', line:'Yellow', numChatting:47, waitTime:155000},
    ];
  }

  ngOnInit() {
  }

}
