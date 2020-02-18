export type RegisterUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export type LoginUser = {
    email: string;
    password: string;
}
