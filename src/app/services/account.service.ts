
import { Confirmpassword } from 'app/model/confirmpassword';
import { LoginWithRecoveryCode } from 'app/model/login-with-recovery-code';
import { User } from 'app/model/user';
import { AppSettings } from 'app/helper/app-settings';
import { contentHeaders } from 'app/helper/http-config';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Login } from 'app/model/login';
import { PostResetPassword } from 'app/model/post-reset-password';

@Injectable()
export class AccountService {
  private api_url = 'http://localhost:52999';
  private loggedIn = false;

  headers = new Headers({
    Accept: 'application/json'
  });
  constructor(private http: Http) {}
  getLogin() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_LOGIN_API)
      .map((res: Response) => {
        if (res.status === 200) {
          return true;
        }
        return false;
      });
  }
  createLogin(login: Login) {
    //const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_LOGIN_API,
        JSON.stringify({
          login
        })
      )
      .map(this.extractData);
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  getLoginWithRecoveryCode(returnurl: string) {
    return this.http
      .get(
        this.api_url + AppSettings.ACCOUNT_LOGINWITHRECOVERYCODE_API,
        returnurl
      )
      .map((response: Response) => {
        if (response.status === 200) {
          return true;
        }
        return false;
      });
  }
  postLoginWithRecoveryCode(loginwithrecoverycode: LoginWithRecoveryCode) {
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_LOGINWITHRECOVERYCODE_API,
        JSON.stringify({
          loginwithrecoverycode
        }),
        { headers: this.headers }
      )
      .map(this.extractData);
  }
  getAccountLockOut() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_LOCKOUT_API)
      .map((res: Response) => {
        if (res.status === 200) {
          return true;
        }
        return false;
      });
  }
  getRegister(returnurl: string) {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_REGISTER_API)
      .map(this.extractData);
  }
  postRegister(user: User): Observable<User[]> {
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_REGISTER_API,
        JSON.stringify({
          user
        }),
        { headers: this.headers }
      )
      .map(this.extractData);
  }
  getConfirmEmail() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_CONFIRMEMAIL_API)
      .map(this.extractData);
  }
  getForgotPassword() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_FORGOTPASSWORD_API)
      .map((res: Response) => {
        if (res.status === 200) {
          return true;
        }
        return false;
      });
  }
  postForgotPassword(confirmpassword: Confirmpassword) {
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_FORGOTPASSWORD_API,
        JSON.stringify({
          confirmpassword
        }),
        { headers: this.headers }
      )
      .map(this.extractData);
  }
  getForgotPasswordConfirmation() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_FORGOTPASSWORDCONFIRMATION_API)
      .map((res: Response) => {
        if (res.status === 200) {
          return true;
        }
        return false;
      });
  }
  getResetPassword() {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_RESETPASSWORD_API)
      .map(this.extractData);
  }
  postResetPassword(postresetpassword: PostResetPassword) {
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_RESETPASSWORD_API,
        JSON.stringify({
          postresetpassword
        }),
        { headers: this.headers }
      )
      .map(this.extractData);
  }
  getResetPasswordConfirmation() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_RESETPASSWORDCONFIRMATION_API)
      .map((res: Response) => {
        if (res.status === 200) {
          return true;
        }
        return false;
      });
  }
  getAccessDenied() {
    return this.http
      .get(this.api_url + AppSettings.ACCOUNT_ACCESSDENIED_API)
      .map((res: Response) => {
        if (res.status === 200) {
          return true;
        }
        return false;
      });
  }
  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }
}
