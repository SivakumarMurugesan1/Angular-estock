import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { GetStockComponent } from './get-stock/get-stock.component';
import { LoginmoduleComponent } from './loginmodule.component';




export const routes: Routes = [
  {
    path: 'home', component: LoginmoduleComponent,
    children:[
      {path: 'companies', component: CompanyListComponent , canActivate:[AuthGuard]},
      {path: 'add-company', component: AddCompanyComponent , canActivate:[AuthGuard]},  
      {path: 'add-stock/:companyCode', component: AddStockComponent , canActivate:[AuthGuard]},
      {path: 'get-stock', component: GetStockComponent , canActivate:[AuthGuard]}
  ]
 
    }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class LoginmoduleRoutingModule { }
