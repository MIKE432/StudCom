import crypto from 'crypto-js';
import { User } from '../types/userTypes';

export const mapUserToRequestModel = (user: User): User => {

  const hashedPassword = crypto.SHA256(user.password).toString();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: hashedPassword
  };
};
