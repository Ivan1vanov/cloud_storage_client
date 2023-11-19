import { Component, Input } from '@angular/core';
import { DocumentResponse } from '../../../types';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent {
  @Input() document!: DocumentResponse;
}
