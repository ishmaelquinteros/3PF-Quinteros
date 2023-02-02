import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from './Login/Guard/acceso.guard';
import { MLayoutModule } from './Layout/m-layout.module';
import { PantallaErrorComponent } from './Layout/Pages/pantalla-error/pantalla-error.component';

const routes: Routes = [
  {
     path: 'login',
    loadChildren: () => import('./Login/mod-login.module').then(m => m.ModLoginModule),
   },
  {
    path: 'app',
    loadChildren: () => import('./Layout/m-layout.module').then(m => m.MLayoutModule),
    canLoad: [AccesoGuard]
  },
   {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
