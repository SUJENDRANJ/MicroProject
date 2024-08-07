import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { coffee } from './model/coffee';

@Injectable({
  providedIn: 'root',
})
export class cafeService {
  url: string;
  coffees: coffee;
  coffeeArr: coffee[];

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3005/coffees';
    this.coffees = new coffee();
    this.coffeeArr = [];
  }

  insert(coffees: coffee) {
    this.http.post<coffee>(this.url, coffees).subscribe();

    return 'Coffee Details Added';
  }

  update(coffees: coffee) {
    this.http.put<coffee>(this.url + '/' + coffees.id, coffees).subscribe();

    return 'Coffee Details Updated';
  }
  delete(id: number) {
    this.http.delete<coffee>(this.url + '/' + id).subscribe();

    return 'Coffee Details Deleted';
  }
  find(id: number) {
    this.http
      .get<coffee>(this.url + '/' + id)
      .subscribe((data) => (this.coffees = data));

    return this.coffees;
  }
  findAll() {
    this.http
      .get<coffee[]>(this.url)
      .subscribe((data) => (this.coffeeArr = data));

    return this.coffeeArr;
  }
}
