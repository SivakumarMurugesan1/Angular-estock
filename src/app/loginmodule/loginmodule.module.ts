import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginmoduleRoutingModule } from './loginmodule-routing.module';

import { CompanyListComponent } from './company-list/company-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { GetStockComponent } from './get-stock/get-stock.component';
import { SearchCompanyPipe } from '../search-company.pipe';
import { LoginmoduleComponent } from './loginmodule.component';
import { Router, RouterModule } from '@angular/router';
import {routes} from './loginmodule-routing.module';






@NgModule({
  declarations: [
    LoginmoduleComponent,    
    CompanyListComponent,
    AddCompanyComponent,
    AddStockComponent,
    GetStockComponent,
    SearchCompanyPipe   
       
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LoginmoduleRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
    
  ]
})
export class LoginmoduleModule { }
