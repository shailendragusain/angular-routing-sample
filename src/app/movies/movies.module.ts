import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { CommonModule } from '@angular/common';
import { MovieBoardComponent } from './components/movie-board/movie-board.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
    declarations: [
        MovieBoardComponent,
        MovieDetailComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule
    ],
    providers: []
})
export class MoviesModule { }