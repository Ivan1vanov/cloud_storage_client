// generic-button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent {
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() buttonText: string = 'Click me';
  @Input() isDisabled: boolean = false;

  getColorClass() {
    return this.color;
  }
}
