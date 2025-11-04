import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service'; // Ajusta la ruta

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

  // Datos del formulario
  contactFormData = {
    name: '',
    email: '',
    message: ''
  };

  // Estado del envío
  isSending = false;
  isSuccess = false;
  isError = false;

  constructor(private emailService: EmailService) {}

  async onSubmitContactForm(event: Event) {
    event.preventDefault();
    this.isSending = true;
    this.isSuccess = false;
    this.isError = false;

    // Validación básica
    if (!this.contactFormData.name || !this.contactFormData.email || !this.contactFormData.message) {
      this.isError = true;
      this.isSending = false;
      return;
    }

    try {
      // Usar el servicio de email
      const success = await this.emailService.sendContactEmail(this.contactFormData);

      if (success) {
        this.isSuccess = true;
        this.resetForm();
      } else {
        this.isError = true;
      }

    } catch (error) {
      console.error('Error:', error);
      this.isError = true;
    } finally {
      this.isSending = false;
    }
  }

  // Función para email rápido
  sendQuickEmail() {
    window.location.href = 'mailto:gilbertoramirez89461@gmail.com?subject=Contacto desde portfolio&body=Hola Gilbert, me interesa contactarte...';
  }

  // Función para llamar
  makeCall() {
    window.location.href = 'tel:+526692229506';
  }

  // Resetear formulario
  private resetForm() {
    this.contactFormData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
