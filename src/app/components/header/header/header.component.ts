import { Component } from '@angular/core';
import { HeaderRouteData } from './types';
import { headerProfileRoutes, headerGuestRoutes } from './constants';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private cookieService: CookieService) {}

    profileRouteData: HeaderRouteData[] = headerProfileRoutes;
    guestRouteData: HeaderRouteData[] = headerGuestRoutes
    get isLogined(): boolean {
      return this.getCookieValue();
    }

    public getCookieValue() {
      const cookieToken = this.cookieService.get('access_token');
 
      return Boolean(cookieToken);
    }
}
