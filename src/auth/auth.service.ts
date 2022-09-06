import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  me() {
    const data = {
      name: 'hiep',
      age: 22,
      company: 'lisod',
    };
    return {
      ...data,
    };
  }
}
