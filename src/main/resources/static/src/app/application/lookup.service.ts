import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './app.base.service'

@Injectable()
export class LookupService extends BaseService{
  private URL = '/lookup';
  constructor(private http: Http) { super(); }
  list(entityName) {
    return this.http.get(this.getAppUrl(this.URL) + "/list/" + entityName).map((response) => response.json());
  }
}
