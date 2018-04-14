import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
