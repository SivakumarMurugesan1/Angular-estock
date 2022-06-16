import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../services/stock';
import { Stockdetails } from '../../services/stockdetails';

@Component({
  selector: 'app-get-stock',
  templateUrl: './get-stock.component.html',
  styleUrls: ['./get-stock.component.css']
})
export class GetStockComponent implements OnInit {
  stockDetails!:Stockdetails[];
   companyCode!:string;
   startDate!:string;
   endDate!:string;
   isGetStock:boolean=false;
   stockData!:Stock[];
   
   
  constructor(private stockService: StockService,
    private httpClientService: StockService) { }

  ngOnInit(): void {
    
  }
 
  handleSuccessfulResponse(response:any){
    console.log("ResponseForStock"+response);
    this.stockDetails=response;
  }

  getStockDetails(companyCode:string,startDate:string,endDate:string){
    alert("getting stocks");  
   this.httpClientService.getStockDetails(companyCode,startDate,endDate).subscribe(data =>{
    console.log(data) 
    this.isGetStock=true;   
    this.handleSuccessfulResponse(data);   
   
   })
  
  }

}
