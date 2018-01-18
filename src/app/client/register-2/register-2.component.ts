import { HttpClient } from '@angular/common/http';
import { ApiAccountRegisterService } from './../../services/api-account-register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Register } from 'app/model/register';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register-2',
  templateUrl: './register-2.component.html',
  styleUrls: ['./register-2.component.css']
})
export class Register2Component implements OnInit, OnDestroy {
  registerForm: FormGroup;
  register: Register[] = [];

  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiaccountregisterService: ApiAccountRegisterService,
    private route: ActivatedRoute,
    private httpclient: HttpClient,
    private http: Http
  ) {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
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
      ])],
      confirmPassword: ['', Validators.required],
      chckBoxTermsAndConditions: ['', Validators.required],
      chckBoxEmailUse: ['', Validators.required]
    });
  }

  onFormSubmit() {
    this.subscription = this.apiaccountregisterService
    .postAccountRegistration(this.registerForm.value)
    .subscribe((register: Register[]) => {
      this.registerForm.reset();
      console.log(register);
    });
    this.router.navigateByUrl('/register2');
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
