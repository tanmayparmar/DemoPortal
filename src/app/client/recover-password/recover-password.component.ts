import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'app/services/account.service';
import { Confirmpassword } from './../../model/confirmpassword';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  confirmpasswordDetails: Confirmpassword[] = [];
  recoverPasswordForm: FormGroup;
  confirmPassword: Confirmpassword;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private translate: TranslateService,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.recoverPasswordForm = this.fb.group({
      emailAddress: ['', Validators.email],
      indentificationNumber: ['', Validators.required]
    });
  }
  ngOnInit() {}
  onFormSubmit() {}
  recoverPassword() {
    this.subscription = this.accountService
    .postForgotPassword(this.recoverPasswordForm.value)
    .subscribe((confirmPassword) => {
   //   console.log(confirmPassword);
    });
   // this.router.navigateByUrl('/resetpasswordconfirmation');
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
