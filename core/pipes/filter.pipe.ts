import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], field: any, filtervalue: any): any {
    if (value && value.length > 0) {
      return value.filter(x => x[field] === filtervalue);
    } 
  }

}
