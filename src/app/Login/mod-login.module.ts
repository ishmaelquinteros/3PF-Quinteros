import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModLoginRoutingModule } from './mod-login-routing.module';
import { VistaInicioComponent } from './Pages/vista-inicio/vista-inicio.component';


@NgModule({
  declarations: [VistaInicioComponent],
  imports: [
    CommonModule,
    ModLoginRoutingModule
  ]
})
export class ModLoginModule { }
