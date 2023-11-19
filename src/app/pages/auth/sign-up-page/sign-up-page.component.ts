import { Component } from '@angular/core';
import { ErrorAppResponse, SignupRequest } from '../../../types';
import { AuthService } from '../../../services';
import { HttpResponseUtils } from '../../../utils';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { appRoutesPath } from 'src/app/constants';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  formData: SignupRequest = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  errorMessages?: string[];

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
    ) {}

  async onSubmit() {
      (await this.authService.signUp(this.formData)).subscribe({
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
