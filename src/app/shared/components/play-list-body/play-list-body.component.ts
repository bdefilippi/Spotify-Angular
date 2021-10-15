import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent implements OnInit {
    tracks: Array<TrackModel> = [];
    sortOptions: { property: string | null; order: string } = {
        property: null,
        order: 'asc',
    };
    constructor() {}

    ngOnInit(): void {
        // const { data }: any = (dataRaw as any).default;
        // this.tracks = data;
    }

    changeSort(property: string): void {
        const { order } = this.sortOptions;
        this.sortOptions = {
            property,
            order: order === 'asc' ? 'desc' : 'asc',
        };
    }
}
