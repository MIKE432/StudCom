import { User } from './userTypes';

export type ChangeUserMethods = {
  loginUser: (user: User | null) => void;
  logoutUser: () => void;
}

export interface ChangeUserMethodsInterface {
  loginUser: (user: User) => void;
  logoutUser: () => void;
}