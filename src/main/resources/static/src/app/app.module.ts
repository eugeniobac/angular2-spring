import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { AccountListComponent }    from './account/account-list.component';
import { AccountNewComponent }  from './account/account-new.component';
import { ProductTemplateListComponent }    from './productTemplate/productTemplate-list.component';
import { ProductTemplateNewComponent }    from './productTemplate/productTemplate-new.component';
import { QuotationRequestListComponent }    from './quotationRequest/quotationRequest-list.component';
import { QuotationRequestNewComponent }    from './quotationRequest/quotationRequest-new.component';
import { UserListComponent }    from './user/user-list.component';
import { UserNewComponent }    from './user/user-new.component';
import { HomeComponent }  from './home.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { HttpModule, JsonpModule }  from '@angular/http';
import { DataTableModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';  
import { FileUploadModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    GrowlModule,
    ButtonModule,
    FileUploadModule,
    MultiSelectModule,
    DialogModule,
    TabViewModule,
    MenuModule,
    routing
  ],
  declarations: [
    AppComponent,
    AccountListComponent,
    HomeComponent,
    PageNotFoundComponent,
    AccountNewComponent,
    ProductTemplateListComponent,
    ProductTemplateNewComponent,
    QuotationRequestListComponent,
    QuotationRequestNewComponent,
    UserListComponent,
    UserNewComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
