import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  // 12 habilidades para grid 6x6 perfecto
  mainSkills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Java' },
    { name: 'Angular' },
    { name: 'NestJS' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Node.js' },
    { name: 'MySQL' },
    { name: 'AWS' }
  ];

  softSkills = [
    { name: 'Trabajo en equipo', icon: 'users' },
    { name: 'Empatía', icon: 'heart' },
    { name: 'Adaptabilidad', icon: 'sync' },
    { name: 'Manejo del estrés', icon: 'brain' }
  ];

  // Función para obtener la duración de animación basada en el índice
  getAnimationDuration(index: number): string {
    const durations = ['500', '700', '900', '1100'];
    return durations[index % durations.length];
  }

  // Función para obtener la ruta del icono basado en el nombre de la habilidad
  getSkillIcon(skillName: string): string {
    const iconMap: {[key: string]: string} = {
      'HTML': './assets/images/icon-html.png',
      'CSS': './assets/images/icon-css.png',
      'JavaScript': './assets/images/icon-js.png',
      'TypeScript': './assets/images/icon-typescript.png',
      'Java': './assets/images/icon-java.png',
      'Angular': './assets/images/icon-angular.png',
      'NestJS': './assets/images/icon-nestjs.png',
      'Git': './assets/images/icon-git.png',
      'GitHub': './assets/images/icon-github.png',
      'Node.js': './assets/images/icon-nodejs.png',
      'MySQL': './assets/images/icon-mysql.png',
      'AWS': './assets/images/icon-aws.png'
    };

    return iconMap[skillName] || './assets/images/icon-default.png';
  }
}
