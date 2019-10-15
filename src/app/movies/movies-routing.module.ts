import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieBoardComponent } from './components/movie-board/movie-board.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const movieRoutes: Routes = [
    {
        path: '',
        component: MovieBoardComponent,
        children: [
            { path: ':id/detail', component: MovieDetailComponent },
            { path: '', component: MovieBoardComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(movieRoutes)
    ],
    declarations: []
})
export class MoviesRoutingModule { }