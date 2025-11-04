import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { AboutComponent } from "./components/about/about";
import { FooterComponent } from "./components/footer/footer";
import { ExperienceComponent } from "./components/experience/experience";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ExperienceComponent
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portafolio - Jesús Gilberto';
}
