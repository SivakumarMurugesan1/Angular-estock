import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }
//private stockURL="http://localhost:8083/api/v1.0/market/stock/add";
//private stockURL1="http://localhost:8083/api/v1.0/market/stock/get";
private stockURL="http://estockcompanyservicelb-1019622738.ap-south-1.elb.amazonaws.com/api/v1.0/market/stock/add";
private stockURL1="http://estockcompanyservicelb-1019622738.ap-south-1.elb.amazonaws.com/api/v1.0/market/stock/get";


  registerStock(companyCode:string, stock:Stock):Observable<Object>{
    return this.httpClient.post(`${this.stockURL}/${companyCode}`,stock);
  }
  getStockDetails(companyCode:string,startDate:string,endDate:string):Observable<Object>{
    return this.httpClient.get<Object>(`${this.stockURL1}/${companyCode}/${startDate}/${endDate}`);
  }
}
