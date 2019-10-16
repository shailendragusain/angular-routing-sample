import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist.model';

const MOCK_ARTISTS: Artist[] = [
    { artistId: 1, name: "Billie Eilish" },
    { artistId: 2, name: "Kanye West" },
    { artistId: 3, name: "Daniel Caesar" }
];

@Component({
    selector: 'app-artist-board',
    templateUrl: './artist-board.component.html'
})
export class ArtistBoardComponent {
    title: string = "Artist Board";
    artists: Artist[];

    constructor(private router: Router, private route: ActivatedRoute) {
        this.artists = MOCK_ARTISTS;
    }

    showDetail(id: number): void {
        this.router.navigate([id], { relativeTo: this.route });
    }
}
