import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private darkMode = new BehaviorSubject<boolean>(false);
  _darkMode = this.darkMode.asObservable();

  private language = new BehaviorSubject<string>('pt');
  _language = this.language.asObservable();

  public order!: Order;

  constructor() {

  }
  
  setDarkMode(value: boolean) {
    this.darkMode.next(value)
  }

  setLanguage(value: string) {
    this.language.next(value)
  }

  setOrder(order: any) {
    localStorage.setItem('order',  JSON.stringify(order));
    this.order = order;
  }

  public getOrder(): any {
    let order = localStorage.getItem('order');
    if (order) {
      return JSON.parse(order);
    }
    return this.order;
  }
}
