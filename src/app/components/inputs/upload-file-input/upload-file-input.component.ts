import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-file-input',
  templateUrl: './upload-file-input.component.html',
  styleUrls: ['./upload-file-input.component.css']
})
export class UploadFileInputComponent {
  @Output() fileSelected = new EventEmitter<File>();
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  onFileChange(event: any) {
    const file = event.target.files[0] as File;
    console.log('Selected file:', file);
    this.fileSelected.emit(file);
  }

  cleanInput() {
    this.fileInput.nativeElement.value = '';
  }
}
