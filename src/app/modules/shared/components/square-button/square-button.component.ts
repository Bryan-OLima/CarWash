import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent {
  @Input() public textButton: string = '';
  @Input() public colorButton: string = 'accent';
  @Input() public sizeButton: string = '90vw';

  public color: string = '#252525';
  constructor() {}
}
