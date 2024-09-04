// email.service.ts
import { Injectable } from '@nestjs/common';
import { EmailClient } from '@azure/communication-email';
import * as Handlebars from 'handlebars';

@Injectable()
export class EmailService {
  private client = new EmailClient('endpoint=https://enviarjhass.unitedstates.communication.azure.com/;accesskey=7cGmaAfGAe0PaLUwp86LFfSF9hfkMf2iPeW0XK792lwSq9pi5vm4JQQJ99AHACULyCps5mg0AAAAAZCSJsj0');

  async sendWelcomeEmail(to: string, subject: string, dataTemplate: any, templateContent: string) {
    try {
      const template = Handlebars.compile(templateContent);
      const html = template(dataTemplate);

      const emailMessage = {
            senderAddress: "DoNotReply@8656ba04-e89c-4753-9a9a-40485676b2ef.azurecomm.net",
        content: {
          subject: subject,
          html: html,
        },
        recipients: {
          to: [{ address: to }],
        },
      };

      const poller = await this.client.beginSend(emailMessage);
      await poller.pollUntilDone();
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}
