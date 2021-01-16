import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'AuthorsPipe',
  pure: true
})
export class AuthorsPipe implements PipeTransform {
  transform(authors: string[]): string {
    return authors.join(', ');
  }
}
