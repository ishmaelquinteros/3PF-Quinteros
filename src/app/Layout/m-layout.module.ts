import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmacionComponent } from './Pages/dialog-confirm/dialog-confirmacion.component';
import { HeadComponent } from './Components/head/head.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MainComponent } from './Components/main/main.component';
import { MLayoutRoutesRoutingModule } from './m-layout-routes-routing.module';
import { ModuloSharedModule } from '../Shared/modulo-shared.module';
import { PantallaErrorComponent } from './Pages/pantalla-error/pantalla-error.component';
import { WrapperPageComponent } from './Pages/wrapper-page/wrapper-page.component';



@NgModule({
  declarations: [
    HeadComponent,
    SidenavComponent,
    MainComponent,
    PantallaErrorComponent,
    WrapperPageComponent,
    DialogConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MLayoutRoutesRoutingModule,
    ModuloSharedModule,
  ],
  exports:[
    HeadComponent,
    SidenavComponent,
    MainComponent,
    DialogConfirmacionComponent,
  ]
})
export class MLayoutModule { }
