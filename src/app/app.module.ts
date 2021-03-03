import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrainsComponent } from './components/trains/trains.component';
import { MmssPipe } from './pipes/mmss.pipe';
import { MessagesComponent } from './components/messages/messages.component';
import { MetroComponent } from './components/metro/metro.component';
import { TraindetailsComponent } from './components/trains/traindetails/traindetails.component';

//there must be ONLY ONE AppModule file per Application

@NgModule({
  declarations: [ //this will contain the names of the components used by my app
    AppComponent,
    //added automatically after giving `ng g component Menu` command in my app folder (the command will also create the menu folder with all its content)
    MenuComponent,
    TrainsComponent,
    MmssPipe,
    MessagesComponent,
    MetroComponent,
    TraindetailsComponent
  ],
  imports: [
    BrowserModule //this will contain a series of important directives so it's always good to have it (imported by default)
  ],
  providers: [],
  bootstrap: [AppComponent] //bootstrap will contain the first component that will be loaded
})
export class AppModule { }
