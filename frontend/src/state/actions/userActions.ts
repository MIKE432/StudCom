import { requestAction, successAction } from '../../rest/actionWrapper';
import { GET_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes';
import { User, RegisterUser } from '../../types/userTypes';


export const getUser = () => requestAction({ type: GET_USER, payload: {} });
export const loginUser = (user: User) => requestAction({type: LOGIN_USER, payload: user});
export const logoutUser = () => requestAction({ type: LOGOUT_USER, payload: {} });
export const registerUser = (user: RegisterUser) => requestAction({ type: REGISTER_USER, payload: user });

export const storeUserToState = (user: User) => ({ type: LOGIN_USER, payload: user });
export const deleteUserFromState = () => ({ type: LOGOUT_USER, payload: {} });

export const registerUserSuccess = (user: User) => successAction({ type: REGISTER_USER, payload: user });