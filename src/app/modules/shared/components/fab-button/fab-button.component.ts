import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent implements DoCheck {
  @Input() public textButton: string = '';
  @Input() public colorButton: string = 'accent';
  @Input() public sizeButton: string = '70px';

  constructor() {}

  ngDoCheck(): void {
    
  }
}
