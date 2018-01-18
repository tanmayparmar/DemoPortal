import { ResetPasswordConfirmationComponent } from 'app/client/reset-password-confirmation/reset-password-confirmation.component';
import { RegisterConfirmationComponent } from './../client/register-confirmation/register-confirmation.component';
import { SubscriberUnregisteredComponent } from './../admin/subscriber-unregistered/subscriber-unregistered.component';
import { SubscriberCodeReleasedComponent } from './../admin/subscriber-code-released/subscriber-code-released.component';
import { SubscriberSearchResultComponent } from './../admin/subscriber-search-result/subscriber-search-result.component';
import { Register2Component } from './../client/register-2/register-2.component';
import { LoginComponent } from './../client/login/login.component';
import { RegisterComponent } from './../client/register/register.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverPasswordComponent } from 'app/client/recover-password/recover-password.component';
import { DashboardComponent } from 'app/client/dashboard/dashboard.component';
import { SubscriberSearchComponent } from 'app/admin/subscriber-search/subscriber-search.component';
import { SubscriberProfileComponent } from 'app/admin/subscriber-profile/subscriber-profile.component';
import { SubscriberProfileDetailsComponent } from 'app/admin/subscriber-profile-details/subscriber-profile-details.component';

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'recoverpassword', component: RecoverPasswordComponent},
  { path: 'register2', component: Register2Component},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'subscribersearch', component: SubscriberSearchComponent},
  { path: 'subscribersearchresult', component: SubscriberSearchResultComponent},
  { path: 'subscriberprofile', component: SubscriberProfileComponent},
  { path: 'subscriberprofiledetails', component: SubscriberProfileDetailsComponent},
  { path: 'subscribercodereleased', component: SubscriberCodeReleasedComponent},
  { path: 'subscriberunregistered', component: SubscriberUnregisteredComponent},
  { path: 'registerconfirmation', component: RegisterConfirmationComponent},
  { path: 'resetpasswordconfirmation', component: ResetPasswordConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            RouterModule],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
