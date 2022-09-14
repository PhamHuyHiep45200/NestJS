import { Injectable } from '@nestjs/common';
import { data } from '../data';
import { CreateUserDto } from './user.dto';
@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    data.push(createUserDto);
  }

  findAll(): CreateUserDto[] {
    return data;
  }
}
