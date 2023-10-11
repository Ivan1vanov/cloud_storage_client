import { Component, Input } from '@angular/core';
import { HeaderRouteData } from '../header/types';

@Component({
  selector: 'app-nav-link-header',
  templateUrl: './nav-link-header.component.html',
  styleUrls: ['./nav-link-header.component.css']
})
export class NavLinkHeaderComponent {
    @Input() routeData!: HeaderRouteData;
}
