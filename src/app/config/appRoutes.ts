import { Routes, mapToCanActivate } from '@angular/router';
import { appRoutesPath } from '../common/constants/routes/appRoutesPath';
import { SignUpPageComponent, HomePageComponent, UploadFilePageComponent, MyFilesPageComponent, SignInPageComponent } from '../modules/pages';
import { AuthRouterGuard } from '../common/guards';

export const appRoutes: Routes = [
    {
      path: appRoutesPath.login,
      component: SignInPageComponent,
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