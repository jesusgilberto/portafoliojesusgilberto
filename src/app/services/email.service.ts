import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private config = {
    serviceId: environment.emailjsServiceId,
    templateId: environment.emailjsTemplateId,
    userId: environment.emailjsUserId
  };

  constructor() {
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
        reply_to: contactData.email
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
