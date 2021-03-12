import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Metro } from 'src/app/models/metro.model';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'mc-traindetails',
  templateUrl: './traindetails.component.html',
  styleUrls: ['./traindetails.component.css']
})
export class TraindetailsComponent implements OnInit {
  @Input() train: Metro;
  idt: string;
  errorMsg;

  constructor(private route: ActivatedRoute, private trainService: TrainService) { }

  ngOnInit() {
      //get the parameter from the URL thanks to route functions: since the call will be async, it's better to move these operations inside ngOnInit rather than keeping them in the constructor
      this.idt = this.route.snapshot.paramMap.get('id');
      this.getMetroDetail(this.idt); //this function is not really necessary, it just helps understanding what's going on
    }

  //this will make the if in the template to avaluate to false, and the div won't be shown
  closeDetail() {
    this.train = null;
  }

  getMetroDetail(idt: string) {
    this.trainService.getMetroDetail(idt)
                     .subscribe(
                       response => this.train = response[0],
                       error => this.errorMsg = error
                     );
  }
}
