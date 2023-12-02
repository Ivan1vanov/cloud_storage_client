import { NgModule } from '@angular/core';
import { HeaderLogoComponent } from './components';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavLinkHeaderComponent } from './components/nav-link-header/nav-link-header.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        HeaderComponent,
        HeaderLogoComponent,
        NavLinkHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {}
