// types.ts
import { User } from './user.entity';

export type UserId = string;

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

export interface UpdateUserInput {
  id: UserId;
  name?: string;
  email?: string;
  password?: string;
  role?: 'user' | 'admin';
}

export type UserResponse = User & {
  id: UserId;
};

export type UserResponseList = UserResponse[];

export interface UserLight {
  id: UserId;
  name: string;
  email: string;
}