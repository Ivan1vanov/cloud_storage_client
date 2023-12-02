import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services';
import { HttpResponseUtils } from '../../../../utils';
import { appRoutesPath } from '../../../../common/constants';
import { ErrorAppResponse, LoginRequest } from '../../../../types';

@Component({
  selector: 'app-signIn-page',
  templateUrl: './signInPage.component.html',
  styleUrls: ['./signInPage.component.css'],
})
export class SignInPageComponent {
  formData: LoginRequest = {
    email: '',
    password: '',
  };

  errorMessages?: string[];

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
    ) {}

  async onSubmit() {
      (await this.authService.login(this.formData)).subscribe({
        next: () => this.handleResponse(),
        error: (e) => this.handleError(e)
      });
  }

  private handleError(error: ErrorAppResponse) {
    this.errorMessages = HttpResponseUtils.getErrorMessagesFromErrorResponse(error);
  }

  private handleResponse() {
    if(this.cookieService.get('access_token')) {
      this.router.navigate([`/${appRoutesPath.home}`])
    }

    this.errorMessages = [
      'Unexpected error occurs. Sorry, try again latter.'
    ]
  }

}