import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { API_URL, USER_ITEMS_PER_PAGE } from '../app.constant';

@Injectable()
export class UserService {
  constructor (protected httpClient: HttpClient) { }

  search (
    q = '',
    page = 1,
    sort = 'followers',
    order = 'asc'
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/search/users`;

    return this.httpClient
      .get<any>(url, {
        params: new HttpParams()
          .set('q', q)
          .set('sort', sort)
          .set('order', order)
          .set('per_page', String(USER_ITEMS_PER_PAGE))
          .set('page', String(page)),
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}