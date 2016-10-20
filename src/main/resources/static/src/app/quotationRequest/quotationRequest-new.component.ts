import { Component, OnInit } from '@angular/core';
import { QuotationRequestService } from './quotationRequest.service';
import { Message } from 'primeng/primeng';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AccountService } from '../account/account.service';
import { LookupService } from '../application/lookup.service';


@Component({
  templateUrl: 'quotationRequest.form.template.html',
  providers: [QuotationRequestService, AccountService, LookupService]
})
export class QuotationRequestNewComponent implements OnInit {
  request = new Object();
  msgs: Message[] = [];
  accounts = [];
  productTemplates = [];
  selectedProductTemplates = [];
  
  selectedFactors = [];
  factors: any = [];
  dynamicTable: any = new Object();

  constructor(private requestQuotationService: QuotationRequestService, private accountService : AccountService,
              private route: ActivatedRoute, private router: Router,  private lookupService: LookupService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log("id: " + id);
      if (id !== undefined) this.requestQuotationService.find(id).subscribe(response => this.extractData(response));
    });

    this.accountService.list().subscribe(response => this.accounts = response);
    this.lookupService.list("/ProductTemplate").subscribe(response => this.productTemplates = response);
    this.lookupService.list("/Factor").subscribe(response => this.factors = response);
  }

  extractData(response) {
    this.request = response;
  }

  createMatrix(){
    console.log("Creating matrix...");
    let templatesId = this.selectedProductTemplates.map(t => t.id);
    let factorsId = this.selectedFactors.map(f => f.id);
    this.requestQuotationService.createMatrix(templatesId, factorsId).subscribe(response => console.log(response));
  }
  
  saveCB() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'Saved', });

    setTimeout(() => {
      this.router.navigateByUrl("/requestQuotation-list");
    }, 2000);
  }

  onSubmit() {
      console.log(this.request);
  }
}