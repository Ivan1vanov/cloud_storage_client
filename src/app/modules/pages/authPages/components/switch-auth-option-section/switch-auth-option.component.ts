import { Component,Input } from '@angular/core';
import { appRoutesPath } from '../../../../../common/constants';

@Component({
  selector: 'switch-auth-option',
  templateUrl: './switch-auth-option.component.html',
  styleUrls: ['./switch-auth-option.component.css']
})
export class SwitchAuthOptionComponent {
    @Input() isLogin: boolean = true;

    loginPath: string = `/${appRoutesPath.login}`

    signUpPath: string = `/${appRoutesPath.signup}`
}
