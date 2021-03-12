import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backToHome() {
      this.router.navigate(['/']); //the path '/' will redirect to arriving path, that is associated to '/arriving' URL, which will show TrainComponent template
  }

}
