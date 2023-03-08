import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSeguro'
})
export class ListSeguroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
