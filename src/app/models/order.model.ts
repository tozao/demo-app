import { Car } from "./car.model";

export class Order {
      
    constructor(
      public id: string,
      public car: Car,
      public characteristics: any,
      public total: number,
      public quantity: number
  
    ) {
    }
  
  
   
  
  }