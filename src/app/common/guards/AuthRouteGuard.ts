import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { appRoutesPath } from '../constants';

@Injectable({providedIn: 'root'})
export class AuthRouterGuard {
    constructor(
        private cookieService: CookieService,
        private router: Router
    ) {}

  canActivate() {
    const accessToken = this.cookieService.get('access_token')

    if(!accessToken) {
        this.router.navigate([appRoutesPath.login]);
        return false
    }

    return true;
  }
}