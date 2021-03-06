import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrainsComponent } from './components/trains/trains.component';
import { MmssPipe } from './pipes/mmss.pipe';
import { MessagesComponent } from './components/messages/messages.component';
import { MetroComponent } from './components/metro/metro.component';
import { TraindetailsComponent } from './components/trains/traindetails/traindetails.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';

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
    TraindetailsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule, //this will contain a series of important directives so it's always good to have it (imported by default)
    RouterModule.forRoot(
      [
        { path: 'arriving', component: TrainsComponent }, //this will show TrainsComponent in the template where "<router-outlet></router-outlet>" appears
        { path: '', redirectTo: '/arriving', pathMatch:'full' }, //this will redirect to the arriving path route
        { path: '**', component: Error404Component } //for every path that is not defined
      ]
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //bootstrap will contain the first component that will be loaded
})
export class AppModule { }
