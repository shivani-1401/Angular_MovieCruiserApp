import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{ path: '', redirectTo: '/homepage', pathMatch: 'full'},
{ path: 'search', component: SearchComponent },
{ path: 'movie-list', component: MovieListComponent, canActivate: [AuthenticationGuard],
},
{ path: 'login', component: LoginComponent },
{ path: 'homepage', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ MovieListComponent, SearchComponent ];
