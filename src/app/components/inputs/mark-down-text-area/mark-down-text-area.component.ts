import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mark-down-text-area',
  templateUrl: './mark-down-text-area.component.html',
  styleUrls: ['./mark-down-text-area.component.css']
})
export class MarkDownTextAreaComponent {
  @Input() inputValue: string = '';
  @Output() inputValueChange = new EventEmitter<string>();

  onInputChange() {
    this.inputValueChange.emit(this.inputValue);
  }
}
