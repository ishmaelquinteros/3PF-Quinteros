import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './Pages/vista-principal/vista-principal.component';
import { VistaModalComponent } from './Pages/vista-modal/vista-modal.component';



@NgModule({
  declarations: [
    VistaPrincipalComponent,
    VistaModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleInscripcionesModule { }
