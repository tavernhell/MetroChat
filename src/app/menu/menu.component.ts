import { Component, OnInit } from '@angular/core';

@Component({ //this is the decoratoe of the component: it allows me to to add certain characteristics to my class
  selector: 'mc-menu', //this is the name that I will use in my pages to refer to this component: <mc-menu></mc-menu>
  templateUrl: './menu.component.html', //visual representation of the file: if I use template property I can directly write the html as the value: in this case it is recommended to surround the code with `` characters, to be able to use both ' and " inside it
  styleUrls: ['./menu.component.css'] //if I need to style the component, I'd do it the file specified here
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
