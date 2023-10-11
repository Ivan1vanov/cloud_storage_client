import { Component } from '@angular/core';
import { HeaderRouteData } from './types';
import { headerProfileRoutes, headerGuestRoutes } from './constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    profileRouteData: HeaderRouteData[] = headerProfileRoutes;
    guestRouteData: HeaderRouteData[] = headerGuestRoutes
    isLogined: boolean = false;
}
