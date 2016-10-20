import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountNewComponent }  from './account/account-new.component';
import { AccountListComponent }    from './account/account-list.component';
import { ProductTemplateListComponent }    from './productTemplate/productTemplate-list.component';
import { ProductTemplateNewComponent }    from './productTemplate/productTemplate-new.component';
import { QuotationRequestListComponent }    from './quotationRequest/quotationRequest-list.component';
import { QuotationRequestNewComponent }    from './quotationRequest/quotationRequest-new.component';
import { UserListComponent }    from './user/user-list.component';
import { UserNewComponent }    from './user/user-new.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home.component';
 
const appRoutes: Routes = [
  { path: 'account-new', component: AccountNewComponent },
  { path: 'account-edit/:id', component: AccountNewComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'productTemplate-list', component: ProductTemplateListComponent },
  { path: 'productTemplate-new', component: ProductTemplateNewComponent },
  { path: 'productTemplate-edit/:id', component: ProductTemplateNewComponent },
  { path: 'requestQuotation-list', component: QuotationRequestListComponent },
  { path: 'requestQuotation-new', component: QuotationRequestNewComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-edit/:id', component: UserNewComponent },
  { path: 'user-new', component: UserNewComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
