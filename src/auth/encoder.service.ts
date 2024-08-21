import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncoderService {
  async encodePassword(contraseña: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(contraseña, salt);
  }

  async checkPassword(
    contraseña: string,
    userContraseña: string,
  ): Promise<boolean> {
    return await bcrypt.compare(contraseña, userContraseña);
  }
}