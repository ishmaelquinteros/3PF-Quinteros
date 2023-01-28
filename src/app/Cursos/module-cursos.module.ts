import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaModalComponent } from './Pages/vista-modal/vista-modal.component';
import { VistaPrincipalComponent } from './Pages/vista-principal/vista-principal.component';



@NgModule({
  declarations: [
    VistaModalComponent,
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleCursosModule { }
