import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { GenericListComponent } from '../application/generic.component-list';

@Component({
  template: `
    <p-growl [value]="msgs" [life]="5000"></p-growl>

    <div class="col-sm-8">
      <h2>Users</h2>
    </div>

    <div class="col-sm-4">
      <a routerLink="/user-new" class="btn btn-primary pull-right" role="button">New</a>
    </div> 

    <p-dataTable [value]="entities" reorderableColumns="true" selectionMode="single" [(selection)]="selectedEntity" [responsive]="true">
        <p-column field="name" header="Name" [sortable]="true" [filter]="true" filterMatchMode="contains"></p-column>
        <p-column field="username" header="Username" [sortable]="true" [filter]="true" filterMatchMode="contains"></p-column>
        <p-column field="roles" header="Roles">
            <template let-user="rowData" pTemplate type="body">
                <ul>
                  <li *ngFor="let item of user.roles" >{{item.name}}</li> 
                </ul>
            </template>
        </p-column>
        <footer>
          <div class="ui-helper-clearfix" style="width:100%">
            <button type="button" pButton icon="fa-pencil-square-o" style="float:left" [routerLink]="['/user-edit', selectedEntity?.id]" label="Edit" [disabled]="!selectedEntity"></button>
            <button type="button" pButton icon="fa-trash-o" style="float:left" (click)="delete(selectedEntity?.id)" label="Delete" [disabled]="!selectedEntity" ></button>
          </div>
        </footer>
    </p-dataTable>
    `
    ,providers: [UserService]
})
export class UserListComponent extends GenericListComponent implements OnInit  {
  constructor(userService: UserService) { super(userService); }
}