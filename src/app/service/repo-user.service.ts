import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { API_URL, USER_ITEMS_PER_PAGE } from '../app.constant';

@Injectable()
export class RepoUserService {
  constructor (protected httpClient: HttpClient) { }

  search (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}`;

    return this.httpClient
      .get<any>(url, {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  searchBranch (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}/branches`;

    return this.httpClient
      .get<any>(url, {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  searchContributor (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}/contributors`;

    return this.httpClient
      .get<any>(url, {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  searchIssue (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}/issues`;

    return this.httpClient
      .get<any>(url, {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  searchPullRequest (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}/pulls`;

    return this.httpClient
      .get<any>(url, {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  searchCommit (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}/commits`;

    return this.httpClient
      .get<any>(url, {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  searchFile (
    username = '',
    repo = ''
  ): Observable<HttpResponse<Object>> {
    const url = `${API_URL}/repos/${username}/${repo}/contents`;

    return this.httpClient
      .get<any>(url, {
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