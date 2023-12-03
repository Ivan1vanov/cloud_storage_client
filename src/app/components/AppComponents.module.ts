import { NgModule } from '@angular/core';
import { MapErrorMessagesComponent } from './error';
import { AppButtonComponent } from './buttons';
import { DisplayFileLogoComponent } from './file';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MapErrorMessagesComponent,
        AppButtonComponent,
        DisplayFileLogoComponent
    ],
    exports: [
        MapErrorMessagesComponent,
        AppButtonComponent,
        DisplayFileLogoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AppComponentsModule {}
