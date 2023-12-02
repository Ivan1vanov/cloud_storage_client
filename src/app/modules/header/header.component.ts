import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { headerGuestRoutes, headerProfileRoutes } from './constants';
import { HeaderRouteData } from './types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private cookieService: CookieService) {}

    profileRouteData: HeaderRouteData[] = headerProfileRoutes;
    guestRouteData: HeaderRouteData[] = headerGuestRoutes
    get isSignetIn(): boolean {
      return this.getCookieValue();
    }

    public getCookieValue() {
      const cookieToken = this.cookieService.get('access_token');

      return Boolean(cookieToken);
    }
}