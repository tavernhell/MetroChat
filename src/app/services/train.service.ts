import { Injectable } from '@angular/core';
//class that will allow me to manage http requests
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Metro } from '../models/metro.model';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private apiGetUrl: string = 'http://www.dcopelli.it/test/angular/metro';

  constructor(private http: HttpClient) { }


  getMetroList(): Observable<Metro[]> {
    return this.http.get<Metro[]>(this.apiGetUrl)
                    .pipe(
                      map(response => response['dati']),
                      catchError(this.handleError)
                    );
  }

  getMetroDetail(idt: string): Observable<Metro> {
    return this.http.get<Metro>(`${this.apiGetUrl}?idt=${idt}`) //get(URL) returns an Observable, specified by a JSON object, without type: that's why it needs to be specified inside <>
                    .pipe( //allows to call multiple functions without using the ". syntax"
                      map(response => response['dati']), //executes an operation for every element returned by the get()
                      catchError(this.handleError) //returns an Observable
                    );
  }

  private handleError(error: any) {
    return throwError(error.message || error); //either return the message of the error or the whole error object itself
  }
}
