import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './mainwork/movie-list/movie-list.component';
import { SearchComponent } from './mainwork/search/search.component';
import { LoginCompComponent } from './login/login-comp/login-comp.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomepageComponent } from './mainwork/homepage/homepage.component';

const routes: Routes = [{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
{ path: 'search', component: SearchComponent },
{
  path: 'movie-list', component: MovieListComponent, canActivate: [AuthenticationGuard],
},
{ path: 'login', component: LoginCompComponent },
{ path: 'homepage', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MovieListComponent, SearchComponent];
