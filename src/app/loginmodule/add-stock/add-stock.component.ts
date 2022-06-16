import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/services/stock';


import { StockService } from '../../services/stock.service';
import { Company } from '../../services/company';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  companyCode!:string;
  stock: Stock=new Stock();
  company: Company=new Company();
    constructor(private stockService: StockService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.companyCode=this.route.snapshot.params['companyCode'];
  }
  
  goToCompaniesList(){
    this.router.navigate(['/estock/home/companies']);
  }

 
  onSubmit(){
      this.stockService.registerStock(this.companyCode,this.stock).subscribe(data =>{
      console.log(data);
      alert("Stock added Succesfully");
      this.goToCompaniesList();
    },
    error=>console.log(error));
    }

}
