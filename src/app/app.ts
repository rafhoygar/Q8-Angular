import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './cabecera/cabecera';
import { PieDePagina } from './pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecera, PieDePagina], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Theplanner4you';
}


