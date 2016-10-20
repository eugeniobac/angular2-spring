import { Component, OnInit } from '@angular/core';
import { ProductTemplateService } from './productTemplate.service';
import { LookupService } from '../application/lookup.service';
import { Message } from 'primeng/primeng';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenericNewComponent } from '../application/generic.component-new';

@Component({
    templateUrl: 'productTemplate.form.html'
    , providers: [ProductTemplateService, LookupService]
})
export class ProductTemplateNewComponent extends GenericNewComponent{
    productTemplate = new Object();
    productAttributes = [];
    msgs: Message[] = [];

    newProductTemplateAttribute = true;
    productTemplateAttribute : any = new Object();
    productTemplateAttributeList = [];
    displayDialog = false;
    selectedProductTemplateAttribute: any;
    selectedProductAttributeId : any;

    productTypes = ["Product Type 1", "Product Type 2"];

    nextPage() { return "/productTemplate-list"; }

    constructor(productTemplateService: ProductTemplateService, private lookupService: LookupService,
        route: ActivatedRoute, router: Router) {
        super(productTemplateService, route, router);
    }

    showDialogToAdd() {
        this.newProductTemplateAttribute = true;
        this.productTemplateAttribute = new Object();
        this.displayDialog = true;
    }

    save() {
        this.productTemplateAttribute.productAttribute = this.productAttributes.filter(pa => pa.id === this.selectedProductAttributeId)[0];

        if (this.newProductTemplateAttribute) this.productTemplateAttributeList.push(this.productTemplateAttribute);
        else this.productTemplateAttributeList[this.findSelectedProductTemplateAttributeIndex()] = this.productTemplateAttribute;

        this.productTemplateAttribute = null;
        this.selectedProductAttributeId = null;
        this.displayDialog = false;
    }

    delete() {
        this.productTemplateAttributeList.splice(this.findSelectedProductTemplateAttributeIndex(), 1);
        this.productTemplateAttribute = null;
        this.selectedProductAttributeId = null;
        this.displayDialog = false;
    }

    findSelectedProductTemplateAttributeIndex(): number {
        return this.productTemplateAttributeList.indexOf(this.selectedProductTemplateAttribute);
    }

    onRowSelect(event) {
        console.log(event.data);
        this.newProductTemplateAttribute = false;
        this.productTemplateAttribute = this.cloneProductTemplateAttribute(event.data);
        this.selectedProductAttributeId = this.productTemplateAttribute.productAttribute.id;
        this.displayDialog = true;
    }

    cloneProductTemplateAttribute(rule) {
        let clone = new Object();
        for (let prop in rule) {
            clone[prop] = rule[prop];
        }
        return clone;
    }

    extractEntityData(response) {
        console.log(response);
        this.productTemplateAttributeList = response["productTemplateAttribute"];
        this.productTemplate = response;
    }

    ngOnInit() {
        this.lookupService.list("ProductAttribute").subscribe(response => this.productAttributes = response);
        super.ngOnInit();
    }

    onSubmit() {
        this.productTemplate["productTemplateAttribute"] = this.productTemplateAttributeList;
        console.log(this.productTemplate);
        super.save(this.productTemplate);
    }
}