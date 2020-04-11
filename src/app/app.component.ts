import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  persons: any[];
  kisi: string = "";

  constructor() {

    this.persons = [
      { name: 'Ahmet', age: 29 },
      { name: 'Mehmet', age: 32 },
      { name: 'Hasan', age: 15 }
    ];
  }

  Sec(secilen: any) {
    this.kisi = secilen.name
  }

}
