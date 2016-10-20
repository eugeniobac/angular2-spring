import { Component, OnInit } from '@angular/core';
import { GenericListComponent } from '../application/generic.component-list';
import { QuotationRequestService } from './quotationRequest.service';
@Component({
    template: `
        <div class="col-sm-8">
           <h2>Requests</h2>
        </div>

        <div class="col-sm-4">
            <a routerLink="/requestQuotation-new" class="btn btn-primary pull-right" role="button">New</a>
        </div> 

        <p-dataTable [value]="entities" [responsive]="true"  selectionMode="single" [(selection)]="selectedEntity">
            <p-column field="name" header="Name"></p-column>
            <p-column field="account" header="Account"></p-column>
            <p-column field="type" header="Date Last Sent"></p-column>
            <p-column field="created" header="Creator"></p-column>
            <footer>
                <div class="ui-helper-clearfix" style="width:100%">
                    <button type="button" pButton icon="fa-pencil-square-o" style="float:left" [routerLink]="['/productTemplate-edit', selectedEntity?.id]" label="Edit" [disabled]="!selectedEntity"></button>
                    <button type="button" pButton icon="fa-trash-o" style="float:left" (click)="delete(selectedEntity?.id)" label="Delete" [disabled]="!selectedEntity" ></button>
                </div>
            </footer>
        </p-dataTable>
    `
    ,providers: [QuotationRequestService]
})
export class QuotationRequestListComponent extends GenericListComponent implements OnInit {
    constructor( productTemplateService : QuotationRequestService) { super(productTemplateService); }
}