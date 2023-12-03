import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './signIn/signInPage.component';
import { AuthInputComponent, ShowPasswordButtonComponent, SwitchAuthOptionComponent } from './components';
import { SignUpPageComponent } from './signUp/signUpPage.component';
import { AppComponentsModule } from '../../../components/AppComponents.module';

@NgModule({
    declarations: [
      SignInPageComponent,
      SignUpPageComponent,
      AuthInputComponent,
      SwitchAuthOptionComponent,
      ShowPasswordButtonComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      AppComponentsModule,
    ]
  })
export class AuthPagesModule {};
