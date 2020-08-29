import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainwork/header/header.component';
import { FooterComponent } from './mainwork/footer/footer.component';
import { SearchService } from './services/search.service';
import { MovieService } from './services/movie.service';
import { SearchComponent } from './mainwork/search/search.component';
import { MovieListComponent } from './mainwork//movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { HomepageComponent } from './mainwork/homepage/homepage.component';
import { LoginCompComponent } from './login/login-comp/login-comp.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, SearchComponent, MovieListComponent, HomepageComponent, LoginCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchService, AuthenticationService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
