import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  metrolist: { idt: string; line: string; numchatting: number; time: number; }[];

  constructor() {
    this.metrolist =
    [
      {idt:'ASD', line:'Red', numchatting:32, time:125000},
      {idt:'AKE', line:'Green', numchatting:29, time:145000},
      {idt:'ASD', line:'Yellow', numchatting:47, time:155000},
    ];
  }

  ngOnInit() {
  }

}
