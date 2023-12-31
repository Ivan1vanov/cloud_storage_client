import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderLogoComponent,NavLinkHeaderComponent } from './components';
import { HeaderComponent } from './header.component';

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
