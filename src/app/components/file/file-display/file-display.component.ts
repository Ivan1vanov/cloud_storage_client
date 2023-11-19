import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { ArrayUtils } from 'src/app/utils';

@Component({
  selector: 'app-display-file-extension',
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.css'],
})
export class FileDisplayComponent {
  @Input() file: File | null = null;
  @Input() extension?: string;

  getFileExtension(): string {
    const parts = this.file!.name.split('.');
  
    return ArrayUtils.getLastElement(parts);
  }

  getFileIconClass(): string {

    let fileExtension: string = '';

    if(this.file) {
      fileExtension = this.getFileExtension();
    }

    if(this.extension) {
      fileExtension = this.extension;
    }

    switch (fileExtension.toLowerCase()) {
      case 'pdf':
        return 'fas fa-file-pdf';
      case 'doc':
      case 'docx':
        return 'fas fa-file-word';
      case 'xls':
      case 'xlsx':
        return 'fas fa-file-excel';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'fas fa-file-image';
      default:
        return 'fas fa-file';
    }
  }
}
