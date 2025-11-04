import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HeaderComponent]
})
export class App {
  protected readonly title = signal('Portafolio - Jesus Gilberto');
}
