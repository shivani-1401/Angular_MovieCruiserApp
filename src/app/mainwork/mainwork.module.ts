import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MovieListComponent, SearchComponent, HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    SearchComponent,
    HomepageComponent
  ]
})
export class MainworkModule { }
