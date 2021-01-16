import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../model/books.model';
import { AppState } from './app.state';

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<AppState,
  ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    console.log(...books);
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
