import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AppSettings } from 'app/helper/app-settings';
import { contentHeaders } from 'app/helper/http-config';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/model/user';

@Injectable()
export class InHouseService {
  private api_url = 'http://localhost:52999';
  searchURL: string;
  constructor(private http: Http) {}

  getSubscribers(sId: string): Observable<User[]> {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .get(
        this.api_url + AppSettings.INHOUSE_REGISTRATION_API + '/' + sId,
        options
      )
      .map(this.extractData);
  }
  postRegistrationCode(sId: string) {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .get(
        this.api_url + AppSettings.INHOUSE_REGISTRATION_API + '/' + sId,
        options
      )
      .map(this.extractData);
  }
  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }
}
