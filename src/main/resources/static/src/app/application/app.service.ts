import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserCredentials } from './userCredentials';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './app.base.service';

import 'rxjs/Rx';

@Injectable()
export class AppService extends BaseService {
  private URL = '/getUserCredentials';

  constructor(private http: Http) { super(); }

  getUserCredentials(): Observable<UserCredentials> {
    return this.http.get(this.getAppUrl(this.URL)).map((response) => response.json());
  } 
}
