import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  //private baseURL = "http://localhost:8082/api/v1.0/market/company/getall";
  //private baseURL1= "http://localhost:8082/api/v1.0/market/company/register";
  //private baseURL2="http://localhost:8082/api/v1.0/market/company/delete";
  //private baseURL3="http://localhost:8082/api/v1.0/market/company/info";

  private baseURL = "http://estockcompanyservicelb-1019622738.ap-south-1.elb.amazonaws.com/api/v1.0/market/company/getall";
  private baseURL1= "http://estockcompanyservicelb-1019622738.ap-south-1.elb.amazonaws.com/api/v1.0/market/company/register";
  private baseURL2="http://estockcompanyservicelb-1019622738.ap-south-1.elb.amazonaws.com/api/v1.0/market/company/delete";
  private baseURL3="http://estockcompanyservicelb-1019622738.ap-south-1.elb.amazonaws.com/api/v1.0/market/company/info";

  constructor(private httpClient: HttpClient) { }

  getCompaniesList():Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.baseURL}`)
  }

   registerCompany(company:Company):Observable<Object>{
     return this.httpClient.post(`${this.baseURL1}`,company);
   }

  deleteCompanyByCompanyCode(companyCode:string):Observable<Object>{
    //return this.httpClient.delete("http://localhost:8082/api/v1.0/market/company/delete/{companyCode}");
    return this.httpClient.delete(`${this.baseURL2}/${companyCode}`);
  }

  findCompanyByCompanyCode(company:Company):Observable<Object>{
    return this.httpClient.get(`${this.baseURL3}/${company}`);
  }
}
