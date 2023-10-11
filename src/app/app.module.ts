import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './constants';
import { AppComponent } from './app.component';
import { 
  HeaderComponent,
  NavLinkHeaderComponent,
  LogoSectionComponent,
  AuthInputComponent,
  ShowPasswordButtonComponent,
  SendAuthDataButtonComponent,
  SwitchAuthTypeTextComponent,
  MapErrorMessagesComponent,
} from './components';
import { 
  LoginPageComponent,
  SignUpPageComponent
} from './pages';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLinkHeaderComponent,
    LogoSectionComponent,
    AuthInputComponent,
    LoginPageComponent,
    ShowPasswordButtonComponent,
    SendAuthDataButtonComponent,
    SignUpPageComponent,
    SwitchAuthTypeTextComponent,
    MapErrorMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
