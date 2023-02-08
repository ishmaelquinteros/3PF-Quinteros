import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from './Login/Guard/acceso.guard';


const routes: Routes = [
  {
     path: 'login',
    loadChildren: () => import('./Login/mod-login.module').then(m => m.ModLoginModule),
    canActivate: [AccesoGuard],
  },
  {
    path: 'app',
    loadChildren: () => import('./Layout/m-layout.module').then(m => m.MLayoutModule),
    canLoad: []
  },
   {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
