import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-error-messages',
  templateUrl: './map-error-messages.component.html',
  styleUrls: ['./map-error-messages.component.css']
})
export class MapErrorMessagesComponent {
  @Input() errorMessages?: string[];
}
