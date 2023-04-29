import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highligh'
})
export class HighlighPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    
    
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);
    console.log('re: : ', re);
    console.log('match: ', match);
    console.log('args: ', args);



    // If there's no match, just return the original value.
    if (!match) {
      console.log('inside if');
      return value;
    }
   

    const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
    console.log("replacedValue", replacedValue);

    return replacedValue
  }

}
