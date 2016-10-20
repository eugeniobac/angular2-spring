import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { GenericService } from '../application/generic.service';

@Injectable()
export class UserService  extends GenericService{
  getPath(){ return '/user'; }
  constructor(http: Http) { super(http); }
}
