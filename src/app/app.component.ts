import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aytra angular app works!';

  user = {
    name: 'Tanmay',
    age: 23
  };
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
