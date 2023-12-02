import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-description-input',
  templateUrl: './file-description-input.component..html',
  styleUrls: ['./file-description-input.component..css']
})
export class FileDescriptionInputComponent {
  @Input() inputValue: string = '';
  @Output() inputValueChange = new EventEmitter<string>();

  onInputChange() {
    this.inputValueChange.emit(this.inputValue);
  }
}
