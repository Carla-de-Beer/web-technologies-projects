import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {bookListReducer} from './state/book-list.reducer';
import {bookCollectionReducer} from './state/book-collection.reducer';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BookCollectionComponent} from './book-collection/book-collection.component';
import {BookListComponent} from './book-list/book-list.component';
import {TitlePipe} from './pipes/title.pipe';
import {AuthorsPipe} from './pipes/authors.pipe';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({books: bookListReducer, collection: bookCollectionReducer}),
    HttpClientModule,
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent, TitlePipe, AuthorsPipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}
