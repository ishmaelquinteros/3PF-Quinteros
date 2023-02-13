import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MUsersRoutingModule } from './m-users-routing.module';
import { UserListComponent } from './Pages/user-list.component';
import { ModuloSharedModule } from '../Shared/modulo-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MUsersRoutingModule,
    ModuloSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MUsersModule { }
