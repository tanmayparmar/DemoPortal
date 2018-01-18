import { User } from './../../model/user';
import { AccountService } from './../../services/account.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Login } from 'app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  userInformation: User[] = [];
  loginInforimation: Login[] = [];

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public translate: TranslateService,
    public accountService: AccountService
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      emailAddress: [
        '', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(50)
      ])],
      passWord: [
        '', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern(
          '^.*(?=.{8,})(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'
        )
      ])]
    });
  }
  ngOnInit() {}
  onFormSubmit() {
  }

  btnClick() {
    this.subscription = this.accountService
    .createLogin(this.loginForm.value)
    .subscribe((login: Login[]) => {
      this.loginForm.reset();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
