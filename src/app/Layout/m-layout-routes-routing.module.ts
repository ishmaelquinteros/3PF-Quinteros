import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from '../Core/Guards/check-login.guard';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent,  
  canActivate: [CheckLoginGuard],
  children: [
    {
      path: 'alumnos',
      loadChildren: () => import('../alumno/alumno.module').then(m => m.AlumnoModule),
      canActivate: [CheckLoginGuard]
    },
    {
      path: 'cursos',
      loadChildren: () => import('../Cursos/cursos.module').then(m => m.CursosModule),
      canActivate: [CheckLoginGuard]
    },
  ]
}
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MLayoutRoutesRoutingModule { }
