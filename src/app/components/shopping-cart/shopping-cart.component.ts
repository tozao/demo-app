import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  

  @Input() order: any;
  
  constructor(
    public persistenceService: PersistenceService,
    public router: Router
  ) { 
  }
  
  finalizeOrder() {
    this.persistenceService.setOrder(this.order);
    this.router.navigate(['resumen']);
  }
}
