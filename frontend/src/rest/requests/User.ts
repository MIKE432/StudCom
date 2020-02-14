import { apiCall } from '../axios/ApiCaller';

export const getHome = async () => await apiCall('/api/', 'GET', {}, {});
