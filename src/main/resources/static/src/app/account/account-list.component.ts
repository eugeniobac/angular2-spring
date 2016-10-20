import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { GenericListComponent } from '../application/generic.component-list';

@Component({
  template: `
    <p-growl [value]="msgs" [life]="5000"></p-growl>

    <div class="col-sm-8">
      <h2>Accounts</h2>
    </div>

    <div class="col-sm-4">
      <a routerLink="/account-new" class="btn btn-primary pull-right" role="button">New</a>
    </div> 

    <p-dataTable [value]="entities" reorderableColumns="true" selectionMode="single" [(selection)]="selectedEntity" [responsive]="true">
        <p-column field="name" header="Name" [sortable]="true" [filter]="true" filterMatchMode="contains"></p-column>
        <p-column field="code" header="Code" [sortable]="true" [filter]="true" filterMatchMode="contains"></p-column>
        <p-column field="contactName" header="Primary Contact" [sortable]="true" [filter]="true" filterMatchMode="contains"></p-column>
        <footer>
          <div class="ui-helper-clearfix" style="width:100%">
            <button type="button" pButton icon="fa-pencil-square-o" style="float:left" [routerLink]="['/account-edit', selectedEntity?.id]" label="Edit" [disabled]="!selectedEntity"></button>
            <button type="button" pButton icon="fa-trash-o" style="float:left" (click)="delete(selectedEntity?.id)" label="Delete" [disabled]="!selectedEntity" ></button>
          </div>
        </footer>

    </p-dataTable>
    `
    ,providers: [AccountService]
})
export class AccountListComponent extends GenericListComponent implements OnInit  {
  constructor(accountService: AccountService) { super(accountService); }
}