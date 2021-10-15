import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
    @Output() callbackData: EventEmitter<any> = new EventEmitter();
    src: string = '';

    constructor() {}

    ngOnInit(): void {}

    callSearch(search: string): void {
        //comienza a buscar a partir de las 3 letras para no andar bombardeando a requests
        if (search.length >= 3) {
            this.callbackData.emit(search);
        }
    }
}
