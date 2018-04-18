import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthorService {

  private apiUrl = environment.apiUrl;

  constructor(public http: Http) { }

  /**
   * Get list of authors
   *
   * @returns {Response}
   */

  getAuthors() {
    return this.http.get(`${this.apiUrl}/authors`)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  /**
   * Handle response from the server.
   *
   * @param {Response} res - list of authors
   *
   * @returns {object}
   *
   */
  private handleResponse(res: Response) {
    const response = res.json();
    return response || {};
  }


  /**
   * Handles error from the server
   *
   * @param {Response} error http error
   *
   * @return {Observable} ErrorObservable
   */
  private handleError(error: Response | any) {
    const message = error.json().message;
    return Observable.throw(message);
  }



}
