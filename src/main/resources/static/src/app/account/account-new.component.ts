import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Message } from 'primeng/primeng';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { GenericNewComponent } from '../application/generic.component-new';


@Component({
  templateUrl: 'account.form.template.html',
  providers: [AccountService]
})
export class AccountNewComponent extends GenericNewComponent {
  account = new Object();
  address = new Object();
  msgs: Message[] = [];
  disableUpload = false;
  dynamicTable: any;
  columnOptions: SelectItem[];

  constructor(accountService: AccountService, route: ActivatedRoute, router: Router) {
    super(accountService, route, router);
    this.dynamicTable = new Object();
  }

  nextPage() { return "/account-list"; }

  extractEntityData(response) {
    this.account = response;
    if (this.account["addresses"].length > 0) this.address = this.account["addresses"][0];
    if (this.account["dynamicJsonTable"] !== null) {
      this.dynamicTable = JSON.parse(this.account["dynamicJsonTable"]);
      this.loadColumnOption();
    }
  }

  onUpload(event) {
    this.disableUpload = false;
    this.dynamicTable = JSON.parse(event.xhr.response);
    this.loadColumnOption();
  }

  loadColumnOption(){
    this.columnOptions = [];

    if(this.dynamicTable.columns){
      for (let i = 0; i < this.dynamicTable.columns.length; i++) {
        this.columnOptions.push({ label: this.dynamicTable.columns[i].header, value: this.dynamicTable.columns[i] });
      }
    }
  }

  onClear() {
    console.log("onClear");
    this.disableUpload = false;
  }

  onSelect(event) {
    console.log("onSelect");
    this.disableUpload = true;
  }

  onSubmit() {
    this.account["addresses"] = [];
    this.account["addresses"].push(this.address);
    this.account["dynamicJsonTable"] = JSON.stringify(this.dynamicTable);

    super.save(this.account);
  }

}