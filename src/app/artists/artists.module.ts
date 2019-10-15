import { NgModule } from '@angular/core';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistBoardComponent } from './components/artist-board/artist-board.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists.component';

@NgModule({
    declarations: [
        ArtistsComponent,
        ArtistBoardComponent,
        ArtistDetailComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ArtistsRoutingModule
    ],
    providers: []
})
export class ArtistsModule { }