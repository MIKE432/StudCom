import { Action } from './generalActionTypes';
import { User, RegisterUser, LoginUser } from '../../userTypes';


export interface UserAction extends Action {
    type: string;
    payload: User | RegisterUser | LoginUser
}