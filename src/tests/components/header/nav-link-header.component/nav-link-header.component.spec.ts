import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavLinkHeaderComponent } from '../../../../app/components';
import { headerRouteDataMock } from '../../../mocks';

describe('NavLinkHeaderComponent', () => {
  let component: NavLinkHeaderComponent;
  let fixture: ComponentFixture<NavLinkHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLinkHeaderComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(NavLinkHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the router link and display the route name', () => {
    component.routeData = headerRouteDataMock;

    fixture.detectChanges();

    const linkElement = fixture.nativeElement.querySelector('.linkHeader');
    expect(linkElement).toBeTruthy();
    expect(linkElement.getAttribute('href')).toEqual(headerRouteDataMock.routePath);
    expect(linkElement.textContent).toContain(headerRouteDataMock.name);
});
});