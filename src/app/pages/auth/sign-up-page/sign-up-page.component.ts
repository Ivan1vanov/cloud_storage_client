import { Component } from '@angular/core';
import { ErrorAppResponse, SignupRequest } from '../../../types';
import { AuthService } from '../../../services';
import { HttpResponseUtils } from '../../../utils';

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

  errorMessage?: string[];

  constructor(
    private authService: AuthService,
    ) {}

  async onSubmit() {
      (await this.authService.signUp(this.formData)).subscribe({
        next: () => {},
        error: (e) => this.handleError(e)
      });
  }

  private handleError(error: ErrorAppResponse) {
    this.errorMessage = HttpResponseUtils.getErrorMessagesFromErrorResponse(error);
  }
}
