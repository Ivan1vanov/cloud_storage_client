import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UploadFilePageComponent } from './pages/upload-file-page/upload-file-page.component';
import { UploadFileInputComponent } from './components/inputs/upload-file-input/upload-file-input.component';
import { FileDisplayComponent } from './components/file/file-display/file-display.component';
import { UploadFileButtonComponent } from './components/buttons/upload-file-button/upload-file-button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { MarkDownTextAreaComponent } from './components/inputs/mark-down-text-area/mark-down-text-area.component';
import { MyFilesPageComponent } from './pages/my-files-page/my-files-page.component';
import { FileItemComponent } from './components/file/file-item/file-item.component';
import { AppButtonComponent } from './components/buttons/app-button/app-button.component';

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
    MapErrorMessagesComponent,
    HomePageComponent,
    UploadFilePageComponent,
    UploadFileInputComponent,
    FileDisplayComponent,
    UploadFileButtonComponent,
    CancelButtonComponent,
    MarkDownTextAreaComponent,
    MyFilesPageComponent,
    FileItemComponent,
    AppButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
