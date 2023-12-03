import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-password-button',
  templateUrl: './show-password-button.component.html',
  styleUrls: ['./show-password-button.component.css']
})
export class ShowPasswordButtonComponent {
    @Input() isPasswordHidden: boolean = true;
}
