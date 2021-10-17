import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
    let component: AuthPageComponent;
    let fixture: ComponentFixture<AuthPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [AuthPageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //Primer prueba
    //Debe asegurar que el formulario sea invalido cuando ingrese dato erroneo

    it('should return invalid form', () => {
        //AAA PATTERN
        //ARRANGE
        const mockCredentials = {
            email: 'asd123!!',
            password: '11111111111111111111111111',
        };

        const emailForm = component.formLogin.get('email');
        const passwordForm = component.formLogin.get('password');

        //ACT

        emailForm?.setValue(mockCredentials.email);
        passwordForm?.setValue(mockCredentials.password);

        //ASSERT

        expect(component.formLogin.invalid).toBeTrue();
    });

    //Segunda prueba
    //Debe asegurar que el formulario sea valido cuando ingrese dato correcto
    it('should return valid form', () => {
        //AAA PATTERN
        //ARRANGE
        const mockCredentials = {
            email: 'unmail@unmail.com',
            password: '12345678',
        };

        const emailForm = component.formLogin.get('email');
        const passwordForm = component.formLogin.get('password');

        //ACT

        emailForm?.setValue(mockCredentials.email);
        passwordForm?.setValue(mockCredentials.password);

        //ASSERT

        expect(component.formLogin.invalid).toBeFalse();
    });

    it('button should have text "Iniciar sesión"', () => {
        const elementRef = fixture.debugElement.query(
            By.css('.form-action button')
        );
        const getInnerText = elementRef.nativeElement.innerText;

        expect(getInnerText).toEqual('Iniciar sesión');
    });
});
