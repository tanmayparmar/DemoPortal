import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/services/account.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-reset-password-confirmation',
  templateUrl: './reset-password-confirmation.component.html',
  styleUrls: ['./reset-password-confirmation.component.css']
})
export class ResetPasswordConfirmationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private http: Http, private accountService: AccountService) { }

  ngOnInit() {
    this.subscription = this.accountService
    .getForgotPasswordConfirmation()
    .subscribe(    );
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
