import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModLoginRoutingModule } from './mod-login-routing.module';
import { VistaInicioComponent } from './Pages/vista-inicio/vista-inicio.component';
import { ModuloSharedModule } from '../Shared/modulo-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VistaInicioComponent],
  imports: [
    CommonModule,
    ModLoginRoutingModule,
    ModuloSharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ModLoginModule { }
