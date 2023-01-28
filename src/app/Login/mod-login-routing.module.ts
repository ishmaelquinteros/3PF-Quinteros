import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaInicioComponent } from './Pages/vista-inicio/vista-inicio.component';

const routes: Routes = [
  { path: '', component:  VistaInicioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModLoginRoutingModule { }
