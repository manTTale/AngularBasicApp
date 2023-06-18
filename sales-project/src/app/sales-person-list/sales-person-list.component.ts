import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Roberto', 'Mantale', 'roberto@gmail.com', 1000),
    new SalesPerson('Justinian', 'Rusu', 'justinian@gmail.com', 2000),
    new SalesPerson('Stefan', 'Ciobanu', 'stefan@gmail.com', 3000),
    new SalesPerson('Ana', 'Goria', 'ana@gmail.com', 4000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
