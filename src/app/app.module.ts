import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LayoutModule } from '@angular/cdk/layout';
import { PersistenceService } from './services/persistence.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { ConfigService } from './services/config.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

const COMPONENTS: any[] = [
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  OrderComponent,
  ShoppingCartComponent,
  ResumenComponent
];

const ANGULAR_MODULES: any[] = [
  MatCommonModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatStepperModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  // cdk
  LayoutModule,
  FlexLayoutModule
]

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ANGULAR_MODULES
  ],
  providers: [PersistenceService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
