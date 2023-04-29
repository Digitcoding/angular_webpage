import { Pipe, PipeTransform } from '@angular/core';
import * as humanFormat from 'human-format';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  // transform(value: any): string {
  //   if (value === null || value === undefined || value === '') return '0 B';
  //   return humanFormat(value, {
  //     scale: 'binary',
  //     unit: 'B'
  //   });
  // }
  transform(value: any) {
    return (value >= 1024 && value <= (1024 * 1024)) ? ((value /(1024 * 1024))+"mb") : ((value) + "Same");
  }

}
