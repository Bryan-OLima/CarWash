import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WashDetailsComponent } from 'src/app/modules/home/pages/wash-details/wash-details.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  @Output() public emitCounter = new EventEmitter();

  public counter: number = 1;
  public getCounter: any = localStorage.getItem('counter');

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if(this.getCounter){
      this.getCounterData()
    }
  }

  getCounterData() {
    this.counter = this.getCounter;
  }

  saveCounter() {
    localStorage.setItem('counter', JSON.stringify(this.counter));
  }

  incrementId() {
    this.counter++;
    this.saveCounter();
  }

  submitCounter(){
    this.incrementId();
    this.emitCounter.emit(this.counter);
    console.log(this.counter)
  }

  openModal(): void {
    this.submitCounter();

    const dialogRef = this.dialog.open(WashDetailsComponent, {
      width: '80%',
      height: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openPrint() {
    window.open('print');
  }

  print() {
    window.print();
  }
}
