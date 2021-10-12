import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appImgBroken]',
})
export class ImgBrokenDirective {
    @HostListener('error') errorHandler(): void {
        const elNative = this.host.nativeElement;
        console.log('Error al cargar la imagen -> ', this.host);
        elNative.src = '../../../assets/images/img-broken.png';
    }

    constructor(private host: ElementRef) {}
}
