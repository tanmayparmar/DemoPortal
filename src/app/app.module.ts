import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { AccountService } from 'app/services/account.service';
import { RegisterComponent } from 'app/client/register/register.component';
import { SubscriberService } from 'app/services/subscriber.service';
import { LanguageService } from './services/language.service';
import { InHouseService } from './services/inhouse.service';
import { ApiAccountRegisterService } from 'app/services/api-account-register.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  providers: [
    AccountService,
    InHouseService,
    LanguageService,
    SubscriberService,
    ApiAccountRegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
