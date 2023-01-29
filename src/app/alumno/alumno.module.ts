import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoListComponent } from './pages/alumno-list/alumno-list.component';
import { AlumnoEditComponent } from './pages/alumno-edit/alumno-edit.component';
import { AlumnoVerComponent } from './pages/alumno-ver/alumno-ver.component';
import { ModuloSharedModule } from '../Shared/modulo-shared.module';


@NgModule({
  declarations: [
    AlumnoListComponent,
    AlumnoEditComponent,
    AlumnoVerComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    ModuloSharedModule,
  ]
})
export class AlumnoModule { }
