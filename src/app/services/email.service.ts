// email.service.ts - Versión mejorada
import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private config = {
    serviceId: 'service_hr34xzz',
    templateId: 'template_16mill8',
    userId: 'YqnC_fLTWnvQROao4'
  };

  constructor() {
    // Inicializar EmailJS
    emailjs.init(this.config.userId);
  }

  async sendContactEmail(contactData: {
    name: string;
    email: string;
    message: string;
  }): Promise<boolean> {
    try {
      const templateParams = {
        from_name: contactData.name,
        from_email: contactData.email,
        message: contactData.message,
        to_email: 'gilbertoramirez89461@gmail.com',
        reply_to: contactData.email // Añade esto
      };

      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );

      console.log('Email enviado exitosamente:', response);
      return true;

    } catch (error: any) {
      console.error('Error detallado enviando email:', {
        status: error?.status,
        text: error?.text,
        error: error
      });
      return false;
    }
  }
}
