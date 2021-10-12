import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
    mainMenu: {
        defaultOptions: Array<any>;
        accessLink: Array<any>;
    } = { defaultOptions: [], accessLink: [] };

    customOptions: Array<any> = [];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.mainMenu.defaultOptions = [
            {
                name: 'Home',
                icon: 'uil uil-home',
                router: ['/'],
            },
            {
                name: 'Buscar',
                icon: 'uil uil-search',
                router: ['/', 'history'],
            },
            {
                name: 'Tu biblioteca',
                icon: 'uil uil-chart',
                router: ['/', 'favorites'],
            },
        ];

        this.mainMenu.accessLink = [
            {
                name: 'Crear lista',
                icon: 'uil-plus-square',
            },
            {
                name: 'Canciones que te gustan',
                icon: 'uil-heart-medical',
            },
        ];

        this.customOptions = [
            {
                name: 'Mi lista 1°',
                router: ['/'],
            },
            {
                name: 'Mi lista 2°',
                router: ['/'],
            },
            {
                name: 'Mi lista 3°',
                router: ['/'],
            },
            {
                name: 'Mi lista 4°',
                router: ['/'],
            },
        ];
    }

    // Es posible hacer el routing implementando el (click) y con la funcion goto
    goTo($event: any): void {
        this.router.navigate(['/', 'favorites'], {
            queryParams: {
                key1: 'value1',
                key2: 'value2',
                key3: 'value3',
            },
        });

        console.log($event);
    }
}
