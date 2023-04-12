//Angular Components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

//This Modules' Pages
import { WashConfirmationComponent } from './components/wash-confirmation/wash-confirmation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FabButtonComponent } from './components/fab-button/fab-button.component';
import { SquareButtonComponent } from './components/square-button/square-button.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    WashConfirmationComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    FabButtonComponent,
    SquareButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    FabButtonComponent,
    HeaderComponent,
    FooterComponent,
    SquareButtonComponent,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class SharedModule { }
