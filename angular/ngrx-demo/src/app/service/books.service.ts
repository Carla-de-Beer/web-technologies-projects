import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../model/books.model';

@Injectable({providedIn: 'root'})
export class GoogleBooksService {
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Array<Book>> {
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=macrame&maxResults=5&langRestrict=en&orderBy=newest';
    return this.http
      .get<{ items: Book[] }>(
        URL
      )
      .pipe(map((books) => books.items || []));
  }
}
