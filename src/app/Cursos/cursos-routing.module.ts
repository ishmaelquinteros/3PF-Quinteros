import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAdminGuard } from '../Core/Guards/check-admin.guard';
import { CursosListComponent } from './Pages/cursos-list/cursos-list.component';
import { CursosVerComponent } from './Pages/cursos-ver/cursos-ver.component';

const routes: Routes = [
  { path: '', 
  component: CursosListComponent,
  children: [
    {path: 'verCursos',
    component: CursosVerComponent,
    canActivate: [CheckAdminGuard]
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
