import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
   },
  
    //   children: [
  //     // {
  //     //   path: 'alumnos',
  //     //   loadChildren: () => import('./Alumnos/module-alumnos.module').then(m => m.ModuleAlumnosModule),
  //     // },
  //   //   {
  //   //     path: 'cursos',
  //   //     loadChildren: () => import('./Cursos/module-cursos.module').then(m => m.ModuleCursosModule),
  //   //   }
  //    ]
  // },
  //{ path: 'alumno', loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule) },
  {
    path: '**',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
