import { User } from 'app/model/user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AppSettings } from 'app/helper/app-settings';
import { contentHeaders } from 'app/helper/http-config';

@Injectable()
export class SubscriberService {
  private api_url = 'http://localhost:52999';
  private loggedIn = false;
  constructor(private http: Http) {}

  getSubscriberDashboard(sId: string): Observable<User[]> {
    let options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .get(
        this.api_url +
          AppSettings.SUBSCRIBER_DASHBOARD_API +
          '?sId=' +
          '2FN2yUv8W5qZV6IkRIdY5A%3D%3D%09'
      )
      .map(this.extractData);
  }
  getSubscriberDocument(
    documentType: string,
    timeZoneOffest: string,
    sId: string
  ) {
    let options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .get(this.api_url + AppSettings.SUBSCRIBER_DOCUMENT_API, options)
      .map(this.extractData);
  }
  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }
}
