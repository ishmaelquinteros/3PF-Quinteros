import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListComponent } from './Pages/cursos-list/cursos-list.component';
import { CursosEditComponent } from './Pages/cursos-edit/cursos-edit.component';
import { CursosVerComponent } from './Pages/cursos-ver/cursos-ver.component';
import { ModuloSharedModule } from '../Shared/modulo-shared.module';

@NgModule({
  declarations: [
    CursosListComponent,
    CursosEditComponent,
    CursosVerComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ModuloSharedModule,
  ]
})
export class CursosModule { }
