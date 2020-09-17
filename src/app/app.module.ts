import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { MainworkModule } from './mainwork/mainwork.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MainworkModule,
    LoginModule
  ],
  providers: [SearchService, AuthenticationService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
