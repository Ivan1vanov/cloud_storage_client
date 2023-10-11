import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ErrorAppResponse, LoginRequest } from '../../../types';
import { HttpResponseUtils } from '../../../utils';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formData: LoginRequest = {
    email: '',
    password: '',
  };

  errorMessage?: string[];

  constructor(
    private authService: AuthService,
    ) {}

  async onSubmit() {
      (await this.authService.login(this.formData)).subscribe({
        next: () => {},
        error: (e) => this.handleError(e)
      });
  }

  private handleError(error: ErrorAppResponse) {
    this.errorMessage = HttpResponseUtils.getErrorMessagesFromErrorResponse(error);
  }

}
