import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      year: '2024',
      company: 'Universidad Politécnica de Sinaloa',
      position: 'Desarrollo Web - Aprende Fácil (Primaria)',
      description: 'Apoyé en el desarrollo de una página web destinada a ayudar a estudiantes de primaria, enfocada en el área de matemáticas, con el objetivo de reforzar sus conocimientos. La plataforma incluye minijuegos interactivos.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      year: '2023',
      company: 'Universidad Politécnica de Sinaloa',
      position: 'Mantenimiento y diagnóstico de computadoras',
      description: 'Mantenimiento preventivo en equipos de cómputo de laboratorios en escuelas primarias, incluyendo inspección de componentes, limpieza de hardware y actualización de software.',
      technologies: ['Hardware', 'Software', 'Mantenimiento']
    },
    {
      year: '2021-2022',
      company: 'Totalplay',
      position: 'Auxiliar Técnico',
      description: 'Instalación, mantenimiento y soporte técnico de servicios de telecomunicaciones.',
      technologies: ['Telecomunicaciones', 'Soporte Técnico', 'Instalación']
    }
  ];
}
