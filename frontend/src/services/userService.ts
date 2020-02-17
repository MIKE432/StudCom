import crypto from 'crypto-js';
import { RegisterUser, LoginUser } from '../types/userTypes';

export const mapUserToRequestModel = (user: RegisterUser): RegisterUser => {

  const hashedPassword = crypto.SHA256(user.password).toString();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: hashedPassword
  };
};


export const mapUserToLoginModel = (user: LoginUser): LoginUser => {
    
    const hashedPassword = crypto.SHA256(user.password).toString();
  
    return {
      email: user.email,
      password: hashedPassword
    };
  };