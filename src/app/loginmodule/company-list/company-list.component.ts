import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../services/company';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[]=[];
  searchCompanyCode!:string;
  constructor(private companyService: CompanyService,
    private router:Router) { }

  ngOnInit(): void {
     this.getCompanies();
  }
  
   private getCompanies(){
   this.companyService.getCompaniesList().subscribe(data =>{
       this.companies=data;
       });
     }

     addStock(companyCode: string){
            this.router.navigate(['/estock/home/add-stock',companyCode]);
      }

     deleteCompany(companyCode: string){
        this.companyService.deleteCompanyByCompanyCode(companyCode).subscribe(data =>{
        alert("Company Deleted");
        this.getCompanies();
      })
     }

     searchCompany(company:Company){
      //  this.companyService.findCompanyByCompanyCode(searchCompanyCode).subscribe(data =>{        
      //  this.companies=this.companies.filter(a=>a.companyCode==searchCompanyCode);  
      this.companyService.findCompanyByCompanyCode(company).subscribe({next:(data:any) => {
        console.log("Company Search",data);
        this.companies = data; 
      },   
      })
     }


 }
