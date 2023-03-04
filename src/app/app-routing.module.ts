import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WashPrintComponent } from './modules/home/pages/wash-print/wash-print.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { WashDetailsComponent } from './modules/home/pages/wash-details/wash-details.component';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';

const name: string = 'Classe A ADMIN'

const routes: Routes = [
  {
    path: '', component: HomeComponent, title: `${name} - Home`
  },
  {
    path: 'details', component: WashDetailsComponent, title: `${name} - Detalhes`
  },
  {
    path: 'print', component: WashPrintComponent, title: `${name} - Imprimir`
  },
  {
    path: '**', component: NotFoundComponent, title: `${name} - 404`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
