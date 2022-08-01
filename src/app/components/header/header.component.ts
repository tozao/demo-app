import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom, subscribeOn, Subscription } from 'rxjs';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {  
  constructor(
    public persistenceService: PersistenceService,
    public translateService: TranslateService
    ) { }

  ngOnInit(): void {
  }

  changeDarkMode() {
    let promise = firstValueFrom(this.persistenceService._darkMode);
    promise.then((value: boolean) => {
      this.persistenceService.setDarkMode(!value);
    })
  }

  changeLanguage() {
    let promise = firstValueFrom(this.persistenceService._language);
    promise.then((value: string) => {
      value = value === 'pt' ? 'en' : 'pt'; 
      this.persistenceService.setLanguage(value);
      this.translateService.use(value);
    })
  }
}
