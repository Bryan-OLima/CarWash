import { Component, DoCheck, OnInit } from '@angular/core';
import { WASH_MOCK } from '../../mock/washmock';
import { Wash } from '../../Models/washes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck, OnInit{
  public counter: string = '';
  public getCounter: any = localStorage.getItem('counter');

  public dataSource: Array<Wash> = WASH_MOCK;
  
  public totalWashes: number = this.dataSource.length;
  
  ngOnInit():void {
    this.totalWashes
  }

  ngDoCheck():void {
  }

  incrementId(newId: string){
    this.counter = newId;
  }

  deleteAll() {
    this.dataSource = [];
  }

}
