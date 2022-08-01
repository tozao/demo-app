import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PersistenceService } from './services/persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  constructor(
    public translate: TranslateService,
    public persistenceService: PersistenceService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('pt');
  }
}
