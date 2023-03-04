import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { WASH_MOCK } from '../../mock/washmock';
import { Wash } from '../../Models/washes';

@Component({
  selector: 'app-wash-list',
  templateUrl: './wash-list.component.html',
  styleUrls: ['./wash-list.component.scss']
})
export class WashListComponent implements OnInit, DoCheck{
  @Input() public dataSource: Array<Wash> = WASH_MOCK;
  columns: string[] = ['pos','car', 'entry-time', 'exit-time', 'actions'];

  public counter: number = 0;

  ngOnInit():void {
  }

  ngDoCheck(): void {
  }

  deleteItem(index: number) {
    this.dataSource.splice(index, 1);
  }

}
