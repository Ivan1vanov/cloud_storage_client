import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HeaderLogoComponent, HeaderRouteData, NavLinkHeaderComponent, headerGuestRoutes } from '../../../app/modules';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { headerProfileRoutes } from '../../../app/modules/header/constants/navHeaderLinks';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    TestBed.resetTestingModule();

    cookieServiceSpy = jasmine.createSpyObj(CookieService, ['get', 'set', 'delete']);

    TestBed.configureTestingModule({
      declarations: [HeaderComponent, HeaderLogoComponent, NavLinkHeaderComponent],
      imports: [CommonModule, RouterTestingModule],
      providers: [
        { provide: CookieService, useValue: cookieServiceSpy },
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should render HeaderLogoComponent', () => {
    const headerLogo = fixture.nativeElement.querySelector('header-logo');
    expect(headerLogo).toBeTruthy();
  });

  it('should render guest routes if user is not signet in', () => {
    cookieServiceSpy.get.and.returnValue(null as unknown as string);
    fixture.detectChanges()
    
    const guestRoutesTableElement = fixture.nativeElement.querySelector('.guestRoutesTable');
    const profileRoutesTableElement = fixture.nativeElement.querySelector('.profileRoutesTable');

    expect(guestRoutesTableElement).toBeTruthy();
    expect(profileRoutesTableElement).toBeNull();
  });

  it('should render profile routes if user is signet in', () => {    
    cookieServiceSpy.get.and.returnValue('some-token');
    fixture.detectChanges()

    const guestRoutesTableElement = fixture.nativeElement.querySelector('.guestRoutesTable');
    const profileRoutesTableElement = fixture.nativeElement.querySelector('.profileRoutesTable');

    expect(guestRoutesTableElement).toBeNull();
    expect(profileRoutesTableElement).toBeTruthy();
  })

  it('should have correct routes', () => {
    expect(component.guestRouteData).toEqual(headerGuestRoutes);
    expect(component.profileRouteData).toEqual(headerProfileRoutes);
  })
});