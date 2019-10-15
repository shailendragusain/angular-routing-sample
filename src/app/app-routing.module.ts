import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'artists',
    loadChildren: 'src/app/artists/artists.module#ArtistsModule'
  },
  {
    path: 'movies',
    loadChildren: 'src/app/movies/movies.module#MoviesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
