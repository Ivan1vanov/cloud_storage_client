import { animate, style, transition, trigger, state } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../../services';
import { UploadFileInputComponent } from './components';
import { ErrorAppResponse, UploadDocumentResponse } from '../../../types';
import { HttpResponseUtils } from '../../../utils';
import { appRoutesPath } from '../../../common/constants';

type FormInputData = {
  description: string;
  uploadedFile: File | null;
}

@Component({
  selector: 'app-upload-file-page',
  templateUrl: './uploadFilePage.component.html',
  styleUrls: ['./uploadFilePage.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, height: 0 })),
      transition(':enter', [animate('0.5s ease')]),
      transition(':leave', [animate('0.5s ease', style({ opacity: 0, height: 0 }))]),
    ]),
  ],
})
export class UploadFilePageComponent {

  static errorMessages = {
    noFile: 'File is not uploaded',
  }

  public errors: string[] = [];

  public isSending: boolean = false;

  constructor(
    private readonly documentService: DocumentService,
    private router: Router
  ) {}

  @ViewChild(UploadFileInputComponent) uploadFileInput!: UploadFileInputComponent;

  public static FormDataKeys = {
    File: 'File',
    Description: 'Description',
  } as const;

  public formInputData: FormInputData = {
    description: '',
    uploadedFile: null,
  }

  public formData = new FormData();

  public onFileSelected(file: File): void {
    this.formInputData.uploadedFile = file;
  }

  public cancelProcess() {
    this.formData.delete(UploadFilePageComponent.FormDataKeys.File);
    this.formInputData = {
      description: '',
      uploadedFile: null,
    };
    this.uploadFileInput.cleanInput();
  }

  public uploadFile = async () => {
    if(!this.formInputData.uploadedFile) {
        this.errors.push(UploadFilePageComponent.errorMessages.noFile);
        return;
    }

    this.isSending = true;

    this.formData.set(UploadFilePageComponent.FormDataKeys.Description, this.formInputData.description)
    this.formData.set(UploadFilePageComponent.FormDataKeys.File, this.formInputData.uploadedFile as File);

    (await this.documentService.upload(this.formData)).subscribe(
      {
        next: (res) => this.handleResponse(res),
        error: (error) => this.handleError(error),
      }
    );
  }

  private handleError(error: ErrorAppResponse) {
    this.errors = HttpResponseUtils.getErrorMessagesFromErrorResponse(error);
    this.isSending = false;
  }

  private handleResponse(res: UploadDocumentResponse) {
    this.router.navigate([appRoutesPath.file.my]);
    this.isSending = false;
  }
}