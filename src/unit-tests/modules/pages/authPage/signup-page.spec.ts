import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../../app/services';
import { AuthInputComponent, SignUpPageComponent, SwitchAuthOptionComponent } from '../../../../app/modules';
import { AppButtonComponent, MapErrorMessagesComponent } from '../../../../app/components';
import { errorAppResponseMock } from '../../../mocks';
import { appRoutesPath } from '../../../../app/common/constants';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj(AuthService, ['signUp']);
    cookieServiceSpy = jasmine.createSpyObj(CookieService, ['get', 'set', 'delete']);
    routerSpy = jasmine.createSpyObj(Router, ['navigate'])
  
    TestBed.configureTestingModule({
      declarations: [SignUpPageComponent, AuthInputComponent, MapErrorMessagesComponent, SwitchAuthOptionComponent, AppButtonComponent],
      imports: [FormsModule, RouterTestingModule, RouterModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: CookieService, useValue: cookieServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
    });
  
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
  });

  it('should render with proper elements', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    const emailInput = fixture.debugElement.query(By.css('app-auth-input[inputName="email"]'));
    const passwordInput = fixture.debugElement.query(By.css('app-auth-input[inputName="password"]'));
    const firstNameInput = fixture.debugElement.query(By.css('app-auth-input[inputName="firstName"]'));
    const lastNameInput = fixture.debugElement.query(By.css('app-auth-input[inputName="lastName"]'));
    const errorMessagesComponent = fixture.debugElement.query(By.css('app-map-error-messages'));
    const switchAuthOptionComponent = fixture.debugElement.query(By.css('switch-auth-option'));
    const appButtonComponent = fixture.debugElement.query(By.css('app-button'));

    expect(formElement).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(errorMessagesComponent).toBeTruthy();
    expect(switchAuthOptionComponent).toBeTruthy();
    expect(appButtonComponent).toBeTruthy();
    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should handle login request', async () => {
      const observableMock = jasmine.createSpyObj(Observable, ['subscribe']);
      authServiceSpy.signUp.and.resolveTo(observableMock);
    
      await component.onSubmit();
  
      expect(authServiceSpy.signUp).toHaveBeenCalledWith(component.formData);
      expect(observableMock.subscribe).toHaveBeenCalledOnceWith({
        next: jasmine.any(Function),
        error: jasmine.any(Function),
      });
    });
  })

  describe('handleError', () => {
    it('should handle login error', () => {
      component['handleError'](errorAppResponseMock);
  
      expect(component.errorMessages).toEqual(errorAppResponseMock.error as string[]);
    });
  })

  describe('handleResponse', () => {
    it('should navigate to home page if receive token in response cookies', () => {
      cookieServiceSpy.get.and.returnValue('some token');
  
      component['handleResponse']();
  
      expect(routerSpy.navigate).toHaveBeenCalled();
    });

    it('should handle login response', () => {
      cookieServiceSpy.get.and.returnValue('some token');
  
      component['handleResponse']();
  
      expect(routerSpy.navigate).toHaveBeenCalledWith([`/${appRoutesPath.home}`]);
    });
  });
});