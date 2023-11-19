import { Routes, mapToCanActivate } from "@angular/router";
import { LoginPageComponent } from "../pages/auth/login-page/login-page.component";
import { appRoutesPath } from "./appRoutesPath";
import { SignUpPageComponent } from "../pages/auth/sign-up-page/sign-up-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { AuthRouterGuard } from "../guards/AuthRouteGuard";
import { UploadFilePageComponent } from "../pages/upload-file-page/upload-file-page.component";
import { MyFilesPageComponent } from "../pages/my-files-page/my-files-page.component";

export const appRoutes: Routes = [
    {
      path: appRoutesPath.login,
      component: LoginPageComponent,
    },
    {
      path: appRoutesPath.signup,
      component: SignUpPageComponent,
    },
    {
      path: appRoutesPath.home,
      component: HomePageComponent,
      canActivate: mapToCanActivate([AuthRouterGuard]),
    },
    {
      path: appRoutesPath.file.upload,
      component: UploadFilePageComponent,
      canActivate: mapToCanActivate([AuthRouterGuard]),
    },
    {
      path: appRoutesPath.file.my,
      component: MyFilesPageComponent,
      canActivate: mapToCanActivate([AuthRouterGuard]),
    }
];