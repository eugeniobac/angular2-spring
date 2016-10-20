import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GenericService } from '../application/generic.service';
import 'rxjs/Rx';

@Injectable()
export class ProductTemplateService extends GenericService {
    getPath(){ return '/productTemplate'; }
    constructor(http: Http) { super(http); }
}
