import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LookupService } from '../application/lookup.service';
import { Message } from 'primeng/primeng';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenericService } from './generic.service';

@Injectable()
export abstract class GenericNewComponent implements OnInit {
    productAttributes = [];
    msgs : Message[] = [];

    constructor(private service: GenericService, private route: ActivatedRoute, private router: Router) { }
    
    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            console.log("id: " + id);
            if (id !== undefined) this.service.find(id).subscribe(response => this.extractEntityData(response));
        });
    }

    abstract extractEntityData(response);
    abstract nextPage() : string; 

    saveCB() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'Saved', });

        setTimeout(() => {
            this.router.navigateByUrl(this.nextPage());
        }, 2000);
    }

    save(entity) {
        this.service.add(entity, this.saveCB());
    }
}