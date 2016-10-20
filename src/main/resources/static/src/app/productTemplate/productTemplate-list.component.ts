import { Component, OnInit } from '@angular/core';
import { GenericListComponent } from '../application/generic.component-list';
import { ProductTemplateService } from './productTemplate.service';
@Component({
    template: `
        <p-growl [value]="msgs" [life]="5000"></p-growl>
        <div class="col-sm-8">
           <h2>Product Template</h2>
        </div>

        <div class="col-sm-4">
            <a routerLink="/productTemplate-new" class="btn btn-primary pull-right" role="button">New</a>
        </div> 

        <p-dataTable [value]="entities" [responsive]="true"  selectionMode="single" [(selection)]="selectedEntity">
            <p-column field="name" header="Name" [sortable]="true" [filter]="true" filterMatchMode="contains" ></p-column>
            <p-column field="history.createDate" [sortable]="true" [filter]="true" filterMatchMode="contains" header="Date Created"></p-column>
            <p-column field="productTemplateType" [sortable]="true" [filter]="true" filterMatchMode="contains" header="Type"></p-column>
            <p-column field="history.createUser.name" header="Creator" [sortable]="true" [filter]="true" filterMatchMode="contains"></p-column>
            <footer>
                <div class="ui-helper-clearfix" style="width:100%">
                    <button type="button" pButton icon="fa-pencil-square-o" style="float:left" [routerLink]="['/productTemplate-edit', selectedEntity?.id]" label="Edit" [disabled]="!selectedEntity"></button>
                    <button type="button" pButton icon="fa-trash-o" style="float:left" (click)="delete(selectedEntity?.id)" label="Delete" [disabled]="!selectedEntity" ></button>
                </div>
            </footer>
        </p-dataTable>
    `
    ,providers: [ProductTemplateService]
})
export class ProductTemplateListComponent extends GenericListComponent implements OnInit {
    constructor( productTemplateService : ProductTemplateService) { super(productTemplateService); }
}