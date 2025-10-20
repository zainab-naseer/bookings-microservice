import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // minimal stub used by JwtStrategy in tests/dev
  async validateUserById(id: number) {
    // replace with real DB lookup
    return { id, role: 'provider' };
  }
}