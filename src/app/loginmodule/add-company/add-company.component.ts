import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../../services/company';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
   company: Company = new Company();
   companyForm: FormGroup;
  constructor(private companyService: CompanyService,
    private router:Router,
    private fb:FormBuilder) 
    {
       this.companyForm = this.fb.group({
        companyCode: ['', Validators.required ],
        companyName: ['', Validators.required ],
        companyCeo: ['', Validators.required ],
        companyTurnover: ['', Validators.required ],
        companyWebsite:  ['', Validators.required ],
        stockExchange: ['', Validators.required ]
                  
       })
     
     }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.companyService.registerCompany(this.company).subscribe(data =>{
      console.log(data);
      alert("Company Registered Succesfully");
      this.goToCompaniesList();
    },
    error=>console.log(error));
  }

  goToCompaniesList(){
    this.router.navigate(['/estock/home/companies']);
  }
onSubmit(){
  console.log(this.company);
  this.saveEmployee();
}
}
