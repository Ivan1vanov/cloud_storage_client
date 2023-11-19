import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent, LogoSectionComponent, NavLinkHeaderComponent } from '../../../../app/components';
import { headerProfileRoutes, headerGuestRoutes } from '../../../../app/components/header/header/constants';
import { activatedRouteMock } from '../../../mocks'

describe('HeaderComponent', async () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, LogoSectionComponent, NavLinkHeaderComponent],
      imports: [RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correct default data', () => {
    expect(component.profileRouteData).toEqual(headerProfileRoutes);
    expect(component.guestRouteData).toEqual(headerGuestRoutes);
    expect(component.isLogined).toBeFalse();

  });

  it('should display profile routes if user is user is logged in', () => {
    spyOn(component, 'getCookieValue').and.returnValue(true);
    fixture.detectChanges();
    const headerLinksTable = fixture.nativeElement.querySelector('.profileRoutesTable');
    expect(headerLinksTable).toBeTruthy();
  });

  it('should not profile routes if user is user is not logged in', () => {
    const headerLinksTable = fixture.nativeElement.querySelector('.headerLinksTable');
    expect(headerLinksTable).toBeFalsy();
  });

  it('should display header links for not logged in users', () => {
    const headerNotLoginedLinksTable = fixture.nativeElement.querySelector('.notLoggedInRoutesTable');
    expect(headerNotLoginedLinksTable).toBeTruthy();
  });

  it('should display header links for not logged in users', () => {
    const headerNotLoginedLinksTable = fixture.nativeElement.querySelector('.notLoggedInRoutesTable');
    expect(headerNotLoginedLinksTable).toBeTruthy();
  });
});
