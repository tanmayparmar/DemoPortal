import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterConfirmationComponent } from './client/register-confirmation/register-confirmation.component';
import { SubscriberUnregisteredComponent } from './admin/subscriber-unregistered/subscriber-unregistered.component';
import { SubscriberCodeReleasedComponent } from './admin/subscriber-code-released/subscriber-code-released.component';
import { SubscriberProfileDetailsComponent } from './admin/subscriber-profile-details/subscriber-profile-details.component';
import { SubscriberProfileComponent } from './admin/subscriber-profile/subscriber-profile.component';
import { SubscriberSearchResultComponent } from './admin/subscriber-search-result/subscriber-search-result.component';
import { SubscriberSearchComponent } from './admin/subscriber-search/subscriber-search.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { Register2Component } from './client/register-2/register-2.component';
import { RecoverPasswordComponent } from './client/recover-password/recover-password.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from 'app/client/register/register.component';
import { ResetPasswordConfirmationComponent } from 'app/client/reset-password-confirmation/reset-password-confirmation.component';

const routes: Routes = [
  {
    path: '',
    children: []
  }
,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
