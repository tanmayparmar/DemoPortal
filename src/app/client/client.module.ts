import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { Register2Component } from './register-2/register-2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from 'app/client/register/register.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { SharedModule } from './../shared/shared.module';
import { ResetPasswordConfirmationComponent } from './reset-password-confirmation/reset-password-confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    SharedModule
  ],

  declarations: [RegisterComponent, LoginComponent,
    RecoverPasswordComponent, Register2Component, DashboardComponent, RegisterConfirmationComponent, ResetPasswordConfirmationComponent]
})
export class ClientModule { }
