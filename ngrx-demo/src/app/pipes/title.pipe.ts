import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'TitlePipe',
  pure: true
})
export class TitlePipe implements PipeTransform {
  transform(val: string): string {
    return `"${val.toUpperCase()}"`;
  }
}
