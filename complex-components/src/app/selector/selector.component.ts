import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedValue: string;
  @Output() itemSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChanged(selectedValue: string) {
    // this.selectedValue = selectedValue;
    this.itemSelected.emit(selectedValue);
  }
}
