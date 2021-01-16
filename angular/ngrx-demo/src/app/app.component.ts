import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {selectBookCollection, selectBooks} from './state/books.selectors';
import {addBook, removeBook, retrievedBookList,} from './state/books.actions';
import {GoogleBooksService} from './service/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Get books from the API
  books$ = this.store.pipe(select(selectBooks));
  // Get book store state
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({Book})));
  }

  onAdd(bookId): void {
    this.store.dispatch(addBook({bookId}));
  }

  onRemove(bookId): void {
    this.store.dispatch(removeBook({bookId}));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {
  }
}
