import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "order",
    component: OrderComponent
  },
  {
    path: "resumen",
    component: ResumenComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
