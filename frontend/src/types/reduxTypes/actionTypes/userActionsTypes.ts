import { Action } from './generalActionTypes';
import { User, RegisterUser, LoginUser } from '../../userTypes';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER ='LOGOUT_USER';
export const GET_USER ='GET_USER';
export const REGISTER_USER ='REGISTER_USER';

export interface UserAction extends Action {
    type: string;
    payload: User | RegisterUser | LoginUser;
}