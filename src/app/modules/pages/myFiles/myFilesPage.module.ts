import { NgModule } from '@angular/core';
import { MyFilesPageComponent } from './my-files-page.component';
import { FileItemComponent } from './components';
import { AppComponentsModule } from '../../../components';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MyFilesPageComponent,
        FileItemComponent,
    ],
    imports: [
        CommonModule,
        AppComponentsModule,
    ]
})
export class MyFilesPageModule {};
