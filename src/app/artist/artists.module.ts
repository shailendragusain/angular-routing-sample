import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistBoardComponent } from './components/artist-board/artist-board.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';

@NgModule({
    declarations: [
        ArtistBoardComponent,
        ArtistDetailComponent
    ],
    imports: [
        BrowserModule,
        ArtistsRoutingModule
    ],
    providers: []
})
export class ArtistsModule { }