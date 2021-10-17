import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
    let service: AuthService;
    let mockUser: any = (mockRaw as any).default;
    let httpClientSpy: { post: jasmine.Spy };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        service = new AuthService(httpClientSpy as any);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    //Prueba del sendCredentials
    it('should return an object with "data" and "tokenSession"', (done: DoneFn) => {
        //Arrange
        const user: any = mockUser.userOk;
        const mockResponse = {
            data: {},
            tokenSession: '123',
        };
        httpClientSpy.post.and.returnValue(of(mockResponse));

        //Act
        service
            .sendCredentials(user.email, user.password)
            .subscribe((responseApi) => {
                const getProperties = Object.keys(responseApi);
                expect(getProperties).toContain('data');
                expect(getProperties).toContain('tokenSession');
                done();
            });
    });
});
