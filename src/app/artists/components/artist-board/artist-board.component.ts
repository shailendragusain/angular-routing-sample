import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-artist-board',
    templateUrl: './artist-board.component.html'
})
export class ArtistBoardComponent {
    constructor(private router: Router, private route: ActivatedRoute) {
    }

    showDetail(id: number): void {
        this.router.navigate([id], { relativeTo: this.route });
    }
}
