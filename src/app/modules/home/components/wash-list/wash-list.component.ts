import { Component, OnInit } from '@angular/core';
import { Wash } from '../../Models/washes';
import { WashService } from 'src/app/services/wash.service';

@Component({
  selector: 'app-wash-list',
  templateUrl: './wash-list.component.html',
  styleUrls: ['./wash-list.component.scss']
})
export class WashListComponent implements OnInit{

  public dataSource!: Array<Wash>;
  public wash!: Wash;

  columns: string[] = ['pos','car', 'entry-time', 'exit-time', 'actions'];

  constructor(private _service: WashService) {}

  ngOnInit():void {
    this.getAll();
  }

  getAll(){
    this._service.getWash()
      .subscribe(
        {
          next: (res) => {
            this.dataSource = res;
          },
          error: () => {

          }
        }
      );
  }

  getById(id: number){
    this._service.getWashById(id)
      .subscribe(
        {
          next: (res) => {
            this.wash = res
          },
          error: () => {} 
        }
      );
  }

  delete(id: number, index: number){
    console.log(id);
    this.dataSource.splice(index, 1);
    this._service.deleteWash(id).subscribe(
      {
        next: () => {
          this.getAll();
          console.log("delete succefully");
        },
      }
    );
  }
}
