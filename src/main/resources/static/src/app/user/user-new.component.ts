import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { LookupService } from '../application/lookup.service';
import { Message } from 'primeng/primeng';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { GenericNewComponent } from '../application/generic.component-new';

@Component({
    template: `
        <p-growl [value]="msgs" [life]="5000"></p-growl>

        <h1>Create New User</h1>

        <form class="form-horizontal" (ngSubmit)="onSubmit()">
            <div class="form-group">
                <label class="control-label col-sm-2" for="name">Name:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" [(ngModel)]="user.name" placeholder="Name" name="name" required>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="username">Username:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" [(ngModel)]="user.username" placeholder="Username" name="username" required>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="username">Password:</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" [(ngModel)]="user.password" placeholder="Password" name="username" required>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="username">Roles:</label>
                <div class="col-sm-10">
                    <p-multiSelect [options]="roles" [(ngModel)]="selectedRoles" name="roles"></p-multiSelect>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" label="Save">Save</button>
                    <a routerLink="/user-list" class="btn btn-primary" routerLinkActive="active" routerLinkActive="isActiveLink">Back</a>
                </div>
            </div>
        </form>
    `,
    providers: [UserService, LookupService]
})
export class UserNewComponent extends GenericNewComponent {
    user = new Object();
    roles: SelectItem[];
    selectedRoles = []; 

    constructor(userService: UserService, route: ActivatedRoute, router: Router, private lookupService: LookupService) {
        super(userService, route, router);
    }
    
    nextPage(){ return "/user-list"; }

    ngOnInit(){
        this.lookupService.list("Role").subscribe(response => this.extractRoleData(response));
        super.ngOnInit();
    }

    extractEntityData(response) {
        console.log(response);
        this.user = response;

        for (let role of response.roles) {
            this.selectedRoles.push(role.id);
        }
    }

    extractRoleData(response) {
        this.roles = [];
        for (let item of response) {
            this.roles.push({ label: item.name, value: item.id });
        }
    }

    onSubmit() {
        let roles = [];
        for (let roleId of this.selectedRoles) {
            roles.push({ id: roleId });
        }

        this.user["roles"] = roles;
        super.save(this.user);
    }

}