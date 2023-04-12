import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Wash } from '../../Models/washes';
import { WashService } from 'src/app/services/wash.service';

@Component({
  selector: 'app-wash-details',
  templateUrl: './wash-details.component.html',
  styleUrls: ['./wash-details.component.scss']
})
export class WashDetailsComponent implements OnInit {

  public wash!: Wash;

  // public generatedId: any = localStorage.getItem('counter');
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
    private _service: WashService
  ) {}

  ngOnInit(): void {

  }

  saveLocalStorage(value:any){
    localStorage.setItem('counter', JSON.stringify(value));
  }

  onNoClick(): void {
    this.clearInputs();
    this.dialogRef.close();
    location.reload();
  }
  clearInputs(){
    this.getDate = '';
    this.car = '';
    this.exitTime = '';
    this.obs = '';
    this.price = 0;
    this.licensePlate = '';
  }

  saveWash(){
    this.wash = {
      car: this.car,
      entryTime: this.getDate.toLocaleTimeString(),
      exitTime: this.exitTime,
      obs: this.obs,
      price: this.price,
      licensePlate: this.licensePlate
    };

    this._service.postWash(this.wash)
      .subscribe({
          next: () => {
            console.log(`${this.wash} foi adicionado com sucesso`);

            setTimeout(() => {
              location.reload();
            }, 1000);
          },
          error: () => {
            console.log(`Erro a se comunicar com a api`);
          }
        }
      );
      
    // this.clearInputs();
    // this.dialogRef.close();
    
  }
}
