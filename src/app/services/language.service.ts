import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { contentHeaders } from 'app/helper/http-config';
import { AppSettings } from 'app/helper/app-settings';

@Injectable()
export class LanguageService {
  private api_url = 'http://localhost:52999';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) {}

  getLanguage(language: string) {
    let options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .get(this.api_url + AppSettings.SHARE_LANGUAGE_API)
      .map(this.extractData);
  }
  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }
}
