import { Component, OnInit } from '@angular/core';

@Component({ //this is the decoratoe of the component: it allows me to to add certain characteristics to my class
  selector: 'mc-menu', //this is the name that I will use in my pages to refer to this component: <mc-menu></mc-menu>
  templateUrl: './menu.component.html', //visual representation of the file: if I use template property I can directly write the html as the value: in this case it is recommended to surround the code with `` characters, to be able to use both ' and " inside it
  styleUrls: ['./menu.component.css'] //if I need to style the component, I'd do it the file specified here
})

//export: to be able to import this class elsewhere (e.g.: at line #5 in app.module.ts)
export class MenuComponent implements OnInit {
  //inside this class I define the logic of my component: I can assign the type using TypeScript syntax: 'vaname:type;'
  link_menu_1: string;
  link_menu_2: string;
  link_menu_3: string;
  constructor() { //here I write initialisation operations: in this case, the value of my links
    this.link_menu_1 = 'Trains';
    this.link_menu_2 = 'Favorites';
    this.link_menu_3 = 'Login';
  } //it is good practice to initalise the variables inside the constructor

  //! NOTE: at the moment, these properties can be only used inside the menu template and not in components that extends it or that it implements

  ngOnInit() {

  }

}
