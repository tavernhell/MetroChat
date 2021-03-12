import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from 'src/app/services/train.service';
import { Metro } from '../../models/metro.model'; //manually imported

@Component({
  selector: 'mc-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})

export class TrainsComponent implements OnInit {
  metroList: Metro[] = [];
  selectedTrain: Metro;
  now: number;
  departedTrains: string;
  errorMsg;

  //inject the Service
  constructor(private router: Router, private trainService: TrainService) {
    this.metroList = [];
    this.now = new Date().getTime();
    this.departedTrains = '';
  }

  ngOnInit() {
    this.getListaMetro();
  }

  getListaMetro() {
    this.trainService.getMetroList()
                     .subscribe(
                        response => this.metroList = response,
                        error => this.errorMsg = error
                     );
  }

  setMetro(t) {
    this.selectedTrain = t;
  }

  updateDepartedTrains (id:string) {
    this.departedTrains += `|${id}`
  }
}
