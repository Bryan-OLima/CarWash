import { AfterViewInit, Component, DoCheck, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WASH_MOCK } from '../../mock/washmock';
import { Wash } from '../../Models/washes';

@Component({
  selector: 'app-wash-details',
  templateUrl: './wash-details.component.html',
  styleUrls: ['./wash-details.component.scss']
})
export class WashDetailsComponent implements OnInit, AfterViewInit {

  public dataSource: any = [
    {   
      id: 1,
      car: 'Celta',
      entryTime: '09:00',
      exitTime: '10:00',
      obs: 'pagar mais tarde',
      price: 50,
      licensePlate:'HHH-3333'
    },
    {
      id: 2,
      car: 'Celta',
      entryTime: '09:00',
      exitTime: '10:00',
      obs: 'pagar mais tarde',
      price: 50,
      licensePlate:'HHH-3333'
    },
    {
      id: 3,
      car: 'Celta',
      entryTime: '09:00',
      exitTime: '10:00',
      obs: 'pagar mais tarde',
      price: 20,
      licensePlate:'HHH-3333'
    },
  ];

  public generatedId: any = localStorage.getItem('counter');
  public getDate: any = new Date();
  public car: string = '';
  public exitTime: string = '';
  public obs: string = '';
  public price: number = 0;
  public licensePlate: string = '';

  public placeholder: string = 'Insira um valor';

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.generatedId;
  }

  saveLocalStorage(value:any){
    localStorage.setItem('counter', JSON.stringify(value));
  }

  cancel(){
    const result: any = this.generatedId = this.generatedId - 1;
    
    this.saveLocalStorage(result);

    this.getDate = '';
    this.car = '';
    this.exitTime = '';
    this.obs = '';
    this.price = 0;
    this.licensePlate = '';

    this.generatedId;
  }

  onNoClick(): void {
    this.cancel();
    this.dialogRef.close();
    location.reload();
  }

  saveWash(){
    this.dataSource.push({
      id: this.generatedId,
      car: this.car,
      entryTime: this.getDate.toLocaleTimeString(),
      exitTime: this.exitTime,
      obs: this.obs,
      price: this.price,
      licensePlate: this.licensePlate
    });
    console.log(this.dataSource);
    this.dialogRef.close();
  }
}
