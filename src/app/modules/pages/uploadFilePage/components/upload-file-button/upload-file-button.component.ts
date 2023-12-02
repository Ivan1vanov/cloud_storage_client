import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-file-button',
  templateUrl: './upload-file-button.component.html',
  styleUrls: ['./upload-file-button.component.css']
})
export class UploadFileButtonComponent {
  @Input() text!: string;

}
