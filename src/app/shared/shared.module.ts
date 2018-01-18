import { TranslateModule } from '@ngx-translate/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,

  ],

  declarations: []
})
export class SharedModule { }
