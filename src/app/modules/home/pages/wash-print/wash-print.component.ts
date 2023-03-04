import { Component, Input, OnInit } from '@angular/core';
import { WASH_MOCK } from '../../mock/washmock';

@Component({
  selector: 'app-wash-print',
  templateUrl: './wash-print.component.html',
  styleUrls: ['./wash-print.component.scss']
})
export class WashPrintComponent implements OnInit{
  @Input() public dataSource: Array<any> = WASH_MOCK;
  _object = Object

  public totalValue: number = 0;
  public datenow: Date = new Date();
  public totalWashes: number = this.dataSource.length;

  ngOnInit():void {
    this.calcTotalValue();
  }

  print() {
    window.print();
  }

  calcTotalValue(){
    for (let i = 0; i < this.dataSource.length; i++) {
      this.totalValue += this.dataSource[i].price;
    }
  }
}