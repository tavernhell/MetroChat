import { Component, OnInit } from '@angular/core';

@Component({ //this is the decoratoe of the component: it allows me to to add certain characteristics to my class
  selector: 'mc-menu', //this is the name that I will use in my pages to refer to this component: <mc-menu></mc-menu>
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
