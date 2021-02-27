import { Component } from '@angular/core';
// import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'rating';

  movies = [
    { titulo: 'Os Vingadores', nota: 5 },
    { titulo: 'Jóias Brutas', nota: 3 },
    { titulo: 'Parasita', nota: 5 },
    { titulo: 'O Irlandês', nota: 4 },
    { titulo: 'Pantera Negra', nota: 4 },
    { titulo: 'Nárnia', nota: 4 },
    { titulo: 'Percy Jackson', nota: 3 },
    { titulo: 'Fábrica de Chocolates', nota: 2 },
    { titulo: 'Hitman', nota: 3 },
    { titulo: 'Titanic', nota: 5 },
  ];
}
