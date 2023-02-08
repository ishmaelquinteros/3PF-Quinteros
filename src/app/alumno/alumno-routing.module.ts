import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAdminGuard } from '../Core/Guards/check-admin.guard';
import { AlumnoListComponent } from './pages/alumno-list/alumno-list.component';
import { AlumnoVerComponent } from './pages/alumno-ver/alumno-ver.component';

const routes: Routes = [
  { path: '', 
  component: AlumnoListComponent, 
  children: [
    { path: 'verAlumnos', 
    component: AlumnoVerComponent,
    canActivate: [CheckAdminGuard] 
  },
  ]
},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
