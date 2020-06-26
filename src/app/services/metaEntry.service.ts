import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MetaEntry } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MetaEntryService {

  private baseUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getApps(): Observable<MetaEntry[]> {
    return this.http.get<MetaEntry[]>(this.baseUrl + 'api/MetaEntry/GetApps/')
      .pipe(
        tap(_ => this.log('fetched apps')),
        catchError(this.handleError<MetaEntry[]>('getApps', []))
      );
  }

  getServers(): Observable<MetaEntry[]> {
    return this.http.get<MetaEntry[]>(this.baseUrl + 'api/MetaEntry/GetServers/')
      .pipe(
        tap(_ => this.log('fetched servers')),
        catchError(this.handleError<MetaEntry[]>('getServers', []))
      );
  }

  getEntry(id: number): Observable<MetaEntry> {
    return this.http.get<MetaEntry>(this.baseUrl + 'api/MetaEntry/GetEntry/'+id)
      .pipe(
        tap(_ => this.log('fetched meta entry')),
        catchError(this.handleError<MetaEntry>('getEntry', ))
      );
  }

  saveServer(entry: MetaEntry): Observable<number> {
    return this.http.post(this.baseUrl + 'api/MetaEntry/SaveServer',entry, this.httpOptions).pipe(
      tap((newEntry: number) => this.log(`saved server w/ id=${newEntry}`)),
      catchError(this.handleError<number>('saveServer'))
    );
  }

  saveApp(entry: MetaEntry): Observable<number> {
    return this.http.post(this.baseUrl + 'api/MetaEntry/SaveApp', entry, this.httpOptions).pipe(
      tap((newEntry: number) => this.log(`added app w/ id=${newEntry}`)),
      catchError(this.handleError<number>('saveApp'))
    );
  }

  /*deleteServer(id: number): Observable<number> {
    return this.http.delete(this.baseUrl + 'api/ServerEntry/'+id, this.httpOptions).pipe(
      tap((newServer: number) => this.log(`deleted server w/ id=${id}`)),
      catchError(this.handleError<number>('saveServer'))
    );
  }*/

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }

}
