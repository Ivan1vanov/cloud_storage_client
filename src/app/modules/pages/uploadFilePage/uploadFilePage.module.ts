import { NgModule } from '@angular/core';
import { UploadFilePageComponent } from './uploadFilePage.component';
import { UploadFileInputComponent, UploadFileButtonComponent, FileDescriptionInputComponent } from './components';
import { AppComponentsModule } from '../../../components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UploadFilePageComponent,
        UploadFileInputComponent,
        UploadFileButtonComponent,
        FileDescriptionInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppComponentsModule
    ]
})
export class UploadFilePageModule {}