import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './services/company';

@Pipe({
  name: 'searchCompany'
})
export class SearchCompanyPipe implements PipeTransform {

  transform(company: Company[], searchCompanyCode: string): Company[] {
    console.log(company);
    if(!company || !searchCompanyCode){
      return company;
    }
    return company.filter(comp=>comp.companyCode.toLocaleLowerCase().
    includes(searchCompanyCode.toLocaleLowerCase()));

}
}
