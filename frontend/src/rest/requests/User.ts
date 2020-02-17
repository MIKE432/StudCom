import { apiCall } from '../axios/ApiCaller';
import { RegisterUser, LoginUser } from '../../types/userTypes';

export const getCurrentUser = async () => await apiCall('/api/user', 'GET', {}, {});

export const registerUser = async (user: RegisterUser) => await apiCall('/api/register', 'POST', {}, user);

export const loginUser = async (user: LoginUser) => await apiCall('/api/login', 'POST', {}, user);
