import { Component, DoCheck, OnInit } from '@angular/core';
import { Wash } from '../../Models/washes';
import { WashService } from 'src/app/services/wash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck, OnInit{
  // public counter: string = '';
  // public getCounter: any = localStorage.getItem('counter');

  public dataSource!: Array<Wash>;
  
  constructor(private _service: WashService) {}

  ngOnInit():void {
    this.getAll();
  }

  ngDoCheck():void {
    this.dataSource;
  }

  getAll(){
    this._service.getWash()
      .subscribe({
        next: (res) => {
          this.dataSource = res;
        },
        error: () => {
          console.log("Não foi possível acessar a api");
        }
      });
  }

}
