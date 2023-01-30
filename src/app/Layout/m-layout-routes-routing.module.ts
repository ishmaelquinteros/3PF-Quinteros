import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent,  
  children: [
    {
      path: 'alumnos',
      loadChildren: () => import('../alumno/alumno.module').then(m => m.AlumnoModule),
    },
    {
      path: 'cursos',
      loadChildren: () => import('../Cursos/cursos.module').then(m => m.CursosModule),
    },
  ]

}
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MLayoutRoutesRoutingModule { }
