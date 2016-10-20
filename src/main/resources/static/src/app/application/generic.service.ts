import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './app.base.service'
import 'rxjs/Rx';

@Injectable()
export abstract class GenericService extends BaseService{
  constructor(protected http: Http) { super(); }
  abstract getPath() : string;

  add(entity: any, success: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.getAppUrl(this.getPath()) + "/add", entity, options)
      .toPromise(success)
      .then(response => response.json());
  }

  list() {
    return this.http.get(this.getAppUrl(this.getPath()) + "/list").map((response) => response.json());
  }

  find(id) {
    return this.http.get(this.getAppUrl(this.getPath()) + "/find/" + id).map((response) => response.json());
  }

  delete(id, sucess) {
    return this.http.delete(this.getAppUrl(this.getPath()) + "/delete/" + id).toPromise(sucess);
  }
}
