import { apiCall } from '../axios/ApiCaller';
import { User } from '../../types/userTypes';

export const getHome = async () => await apiCall('/api/', 'GET', {}, {});

export const registerUser = async (user: User) => await apiCall('/api/register', 'POST', {}, user);
