import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  order: any;
  
  constructor(
    public persistenceService: PersistenceService,
    public router: Router
  ) { 
    this.order = this.persistenceService.getOrder();

  }

  ngOnInit(): void {
  }

}
