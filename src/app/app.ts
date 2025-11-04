import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { AboutComponent } from "./components/about/about";
import { FooterComponent } from "./components/footer/footer";
import { ExperienceComponent } from "./components/experience/experience";
import { HeroComponent } from "./components/hero/hero";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ExperienceComponent,
    HeroComponent
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portafolio - Jesús Gilberto';
}
