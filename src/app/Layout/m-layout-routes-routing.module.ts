import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from '../Login/Guard/acceso.guard';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent,  
  canActivateChild: [AccesoGuard],
  children: [
    {
      path: 'alumnos',
      loadChildren: () => import('../alumno/alumno.module').then(m => m.AlumnoModule),
      canActivate: [AccesoGuard]
    },
    {
      path: 'cursos',
      loadChildren: () => import('../Cursos/cursos.module').then(m => m.CursosModule),
      canActivate: [AccesoGuard]
    },
  ]

}
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MLayoutRoutesRoutingModule { }
