import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TrackService {
    private readonly URL = environment.api;
    private skipRandom(listTracks: TrackModel[]): Promise<TrackModel[]> {
        return new Promise((resolve, reject) => {
            const len = listTracks.length;
            var random = 0;
            var listTmp = listTracks;
            for (let index = 0; index < 6; index++) {
                random = Math.floor(Math.random() * len);
                listTmp = listTmp.filter((a) => a._id !== random);
            }

            var random = Math.random() * len;
            resolve(listTmp);
        });
    }

    constructor(private httpClient: HttpClient) {}

    /**
     *
     * @returns Todas las canciones trending
     */
    getAllTracks$(): Observable<any> {
        return this.httpClient.get(`${this.URL}/tracks`).pipe(
            map(({ data }: any) => {
                return data;
            })
        );
    }

    /**
     *
     * @returns Todas las canciones random
     */
    getAllRandom$(): Observable<any> {
        return this.httpClient.get(`${this.URL}/tracks`).pipe(
            mergeMap(({ data }: any) => this.skipRandom(data))
            //tap((data) => console.log(data))
        );
    }
}
