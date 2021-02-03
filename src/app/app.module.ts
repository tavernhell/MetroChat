import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

//there must be ONLY ONE AppModule file per Application

@NgModule({
  declarations: [ //this will contain the names of the components used by my app
    AppComponent,
    MenuComponent //added automatically after giving `ng g component Menu` command in my app folder
  ],
  imports: [
    BrowserModule //this will contain a series of important directives so it's always good to have it (imported by default)
  ],
  providers: [],
  bootstrap: [AppComponent] //bootstrap will contain the first component that will be loaded
})
export class AppModule { }
