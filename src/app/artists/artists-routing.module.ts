import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistBoardComponent } from './components/artist-board/artist-board.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { ArtistsComponent } from './artists.component';

const artistRoutes: Routes = [
    {
        path: '',
        component: ArtistsComponent,
        children: [
            { path: ':id/detail', component: ArtistDetailComponent },
            { path: '', component: ArtistBoardComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(artistRoutes)
    ],
    declarations: []
})
export class ArtistsRoutingModule { }