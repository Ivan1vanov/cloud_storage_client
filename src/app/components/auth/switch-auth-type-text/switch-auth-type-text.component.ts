import { Component,Input } from '@angular/core';
import { appRoutesPath } from '../../../constants';

@Component({
  selector: 'app-switch-auth-type-text',
  templateUrl: './switch-auth-type-text.component.html',
  styleUrls: ['./switch-auth-type-text.component.css']
})
export class SwitchAuthTypeTextComponent {
    @Input() isLogin: boolean = true;

    loginPath: string = `/${appRoutesPath.login}`

    signUpPath: string = `/${appRoutesPath.signup}`
}
