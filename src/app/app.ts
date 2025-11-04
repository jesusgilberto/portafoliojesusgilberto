import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portafolio - Jesús Gilberto';
}
