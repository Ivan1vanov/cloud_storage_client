import { Routes } from "@angular/router";
import { LoginPageComponent } from "../pages/auth/login-page/login-page.component";
import { appRoutesPath } from "./appRoutesPath";
import { SignUpPageComponent } from "../pages/auth/sign-up-page/sign-up-page.component";

export const appRoutes: Routes = [
    {
      path: appRoutesPath.login,
      component: LoginPageComponent
    },
    {
        path: appRoutesPath.signup,
        component: SignUpPageComponent
    },
];