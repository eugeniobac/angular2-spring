import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GenericService } from '../application/generic.service';
import 'rxjs/Rx';

@Injectable()
export class QuotationRequestService extends GenericService {
    getPath() { return '/quotationRequest'; }
    constructor(http: Http) { super(http); }

    createMatrix(templatesId, factorsId) {
        console.log("service creating matrix");
       
        let params = new URLSearchParams();
        params.set('templates', templatesId);
        params.set('factors', factorsId);

        return this.http.get(this.getAppUrl(this.getPath()) + "/createMatrix", { search: params }).map((response) => response.json());
    }
}
