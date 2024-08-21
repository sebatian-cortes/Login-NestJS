import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail', // O el servicio de correo que estés usando
    auth: {
      user: 'tu_email@gmail.com',
      pass: 'tu_contraseña',
    },
  });

  async sendResetPasswordEmail(to: string, token: string) {
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;
    await this.transporter.sendMail({
      from: 'tu_email@gmail.com',
      to,
      subject: 'Restablecimiento de Contraseña',
      text: `Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetLink}`,
      html: `<a href="${resetLink}">Restablecer Contraseña</a>`,
    });
  }

}
