import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { Order } from 'src/app/models/order.model';
import { ConfigService } from 'src/app/services/config.service';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  stepperConfig!: Observable<any>;
  cars!: Observable<any>;

  order = new Order(Date.now().toString(), new Car('', '', '', 0), null, 0, 0);
  showShoppingCart = false;

  constructor(
    public configService: ConfigService,
    public persistenceService: PersistenceService
  ) { 
  }

  ngOnInit(): void {
    this.persistenceService.setOrder(null);
    this.stepperConfig = this.configService.get('stepper');
    this.cars = this.configService.get('cars');
  }

  saveCar(car: Car): void {
    this.order.car = car;
    this.order.total = car.price;
    this.order.quantity = 1;
    this.persistenceService.setOrder(this.order);
    this.showShoppingCart = true;
    this.stepperConfig.subscribe((config: any) => {
      config.steps.forEach((step: any) => {
        if (step.stepType === 'form') {
          this.order.characteristics = {};
          step.fields.forEach((field: any) => {
            this.order.characteristics[field.name] = '';
          });
        }
      });
    })
  }
}
