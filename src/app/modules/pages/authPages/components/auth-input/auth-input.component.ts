import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthInputTypes } from './types';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css']
})
export class AuthInputComponent {
  @Input() inputName!: string;
  @Input() labelName!: string;
  @Input() type: AuthInputTypes = 'text';
  @Input() inputValue: string = '';
  @Output() inputValueChange = new EventEmitter<string>();

  isPasswordHidden: boolean = true;

  showPassowrd() {
    this.isPasswordHidden = false;
  }

  hidePassowrd() {
    this.isPasswordHidden = true;
  }

  prepareInputType(): AuthInputTypes {
    if(this.type === 'password' && !this.isPasswordHidden) {
        return 'text'
    }

    return this.type;
  }

  onInputChange() {
    this.inputValueChange.emit(this.inputValue);
  }
}
