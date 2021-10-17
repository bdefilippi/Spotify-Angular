import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
    selector: 'app-favorite-page',
    templateUrl: './favorite-page.component.html',
    styleUrls: ['./favorite-page.component.css'],
})
export class FavoritePageComponent implements OnInit {
    tracksFavorites: Array<TrackModel> = [];

    constructor(private trackService: TrackService) {}

    ngOnInit(): void {
        this.loadData();
    }

    async loadData(): Promise<any> {
        this.tracksFavorites = await this.trackService
            .getAllTracks$()
            .toPromise();
    }
}
