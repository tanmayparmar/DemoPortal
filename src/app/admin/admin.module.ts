
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberSearchComponent } from './subscriber-search/subscriber-search.component';
import { SubscriberSearchResultComponent } from './subscriber-search-result/subscriber-search-result.component';
import { SubscriberProfileComponent } from './subscriber-profile/subscriber-profile.component';
import { SubscriberProfileDetailsComponent } from './subscriber-profile-details/subscriber-profile-details.component';
import { SubscriberCodeReleasedComponent } from './subscriber-code-released/subscriber-code-released.component';
import { SubscriberUnregisteredComponent } from './subscriber-unregistered/subscriber-unregistered.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, SharedModule],
  declarations: [
    SubscriberSearchComponent,
    SubscriberSearchResultComponent,
    SubscriberProfileComponent,
    SubscriberProfileDetailsComponent,
    SubscriberCodeReleasedComponent,
    SubscriberUnregisteredComponent
  ]
})
export class AdminModule {}
