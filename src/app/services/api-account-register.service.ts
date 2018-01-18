import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AppSettings } from 'app/helper/app-settings';
import { Register } from 'app/model/register';
import { contentHeaders } from 'app/helper/http-config';

@Injectable()
export class ApiAccountRegisterService {
  private api_url = 'http://localhost:52999';
  constructor(private http: Http) {}

  postAccountSubscriber(user: User): Observable<User[]> {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_SUBSCRIBER_API,
        JSON.stringify({
          user
        }), options
      )
      .map(this.extractData);
  }
  postAccountRegistrationCode(registrationcode: string): Observable<User[]> {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_REGISTRATIONCODE_API,
        JSON.stringify({
          registrationcode
        }),
        options
      )
      .map(this.extractData);
  }
  postAccountRegistration(register: Register): Observable<User[]> {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .post(
        this.api_url + AppSettings.ACCOUNT_REGISTRATION_API,
        JSON.stringify({
          register
        }),
        options
      )
      .map(this.extractData);
  }
  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      error.text = err.msg + err.internalMessage;
    } else {
      error = error.message ? error.message : error.toString();
    }
    console.log(error);
    return Observable.throw(error);
  }
}
