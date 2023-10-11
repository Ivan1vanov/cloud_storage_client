import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-send-auth-data-button',
  templateUrl: './send-auth-data-button.component.html',
  styleUrls: ['./send-auth-data-button.component.css']
})
export class SendAuthDataButtonComponent {
    @Input() text!: string;
    @Input() type!: string;
}
