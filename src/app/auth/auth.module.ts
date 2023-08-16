import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { sharedmodule } from '../shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({

  declarations: [LoginComponent,RegisterComponent],
  imports: [ CommonModule,sharedmodule,AuthRoutingModule]
  })

export class AuthModule { }