import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtistBoardComponent } from './components/artist-board/artist-board.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';

const artistRoutes: Routes = [
    {
        path: '',
        component: ArtistBoardComponent,
        children: [
            { path: ':id/detail', component: ArtistDetailComponent },
            { path: '', component: ArtistBoardComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(artistRoutes)
    ]
})
export class ArtistsRoutingModule { }