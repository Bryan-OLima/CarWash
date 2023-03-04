import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { WashListComponent } from './components/wash-list/wash-list.component';
import { WashDetailsComponent } from './pages/wash-details/wash-details.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { WashPrintComponent } from './pages/wash-print/wash-print.component';




@NgModule({
  declarations: [
    WashListComponent,
    WashDetailsComponent,
    HomeComponent,
    WashPrintComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatInputModule,
  ]
})
export class HomeModule { }
