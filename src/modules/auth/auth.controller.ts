import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: any) {
    // return a fake token for local testing; replace with real logic
    return { access_token: 'test-token' };
  }
}