import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesafioComponent } from './desafio/desafio.component';

const routes: Routes = [
  { path: 'desafio', component: DesafioComponent },
  { path: '', redirectTo: '/desafio', pathMatch: 'full' }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { 
  
}
