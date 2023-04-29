import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  pure:false
})
export class AppendPipe implements PipeTransform {

  transform(value: string, args: string): string {
    console.log('append pipe');

    return value + args;
  }

}
