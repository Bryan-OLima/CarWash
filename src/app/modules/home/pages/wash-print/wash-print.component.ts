import { Component, OnInit } from '@angular/core';
import { WashService } from 'src/app/services/wash.service';

@Component({
  selector: 'app-wash-print',
  templateUrl: './wash-print.component.html',
  styleUrls: ['./wash-print.component.scss']
})
export class WashPrintComponent implements OnInit{
  public wash!: Array<any>;
  _object = Object;

  public totalValue: number = 0;
  public datenow: Date = new Date();
  public totalWashes: number = this.wash.length;

  constructor(private _service: WashService ){}

  ngOnInit():void {
    this.getData();
  }

  getData(){
    this._service.getWash()
      .subscribe({
        next: (res) => {
          this.wash = res;
          this.calcTotalValue();
        },
        error: () => {
          console.log('Não foi possível conectar a api');
        }
      });
  }

  calcTotalValue(){
    for (let i = 0; i < this.wash.length; i++) {
      this.totalValue += this.wash[i].price;
    }
  }

  print() {
    window.print();
  }
}