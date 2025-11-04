import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { AboutComponent } from "./components/about/about";
import { SkillsComponent } from './components/skills/skills';
import { FooterComponent } from "./components/footer/footer";
import { ExperienceComponent } from "./components/experience/experience";
import { HeroComponent } from "./components/hero/hero";
import { ContactComponent } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent,
    HeroComponent,
    ContactComponent
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portafolio - Jesús Gilberto';
}
