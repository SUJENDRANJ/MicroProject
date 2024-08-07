import { Component } from '@angular/core';
import { coffee } from './model/coffee';
import { cafeService } from './cafe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Cafe-Management-System';

  coffees: coffee;
  result: string;
  coffeeArr: coffee[];
  flag: boolean;

  constructor(private service: cafeService) {
    this.coffees = new coffee();
    this.result = '';
    this.coffeeArr = [];
    this.flag = false;
  }

  insert(data: any) {
    this.coffees.id = data.id;
    this.coffees.cName = data.cName;
    this.coffees.cost = data.cost;

    alert(data.id + ' ' + data.cName + ' ' + data.cost);

    this.result = this.service.insert(this.coffees);
  }

  update(data: any) {
    this.coffees.id = data.id;
    this.coffees.cName = data.cName;
    this.coffees.cost = data.cost;

    alert(data.id + ' ' + data.cName + ' ' + data.cost);

    this.result = this.service.update(this.coffees);
  }
  delete(data: any) {
    this.result = this.service.delete(data.id);
  }
  find(data: any) {
    this.coffees = this.service.find(data.id);
    this.result =
      this.coffees.id + ' ' + this.coffees.cName + ' ' + this.coffees.cost;
  }
  findAll() {
    this.coffeeArr = this.service.findAll();
    this.flag = true;
  }
}
