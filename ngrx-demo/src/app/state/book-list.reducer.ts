import {createReducer, on} from '@ngrx/store';

import {retrievedBookList} from './books.actions';
import {Book} from '../model/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const bookListReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, {Book: book}) => [...book]
  )
);
