import axios from 'axios';
import { Method, RequestBody, RequestParams, ResponseType } from '../../types/apiTypes';

export const apiCall = async (url: string, method: Method, params: RequestParams, body: RequestBody) => (await apiRequest(url, method, params, body)).data;

const apiRequest = (url: string, method: Method = 'GET', params = {}, body = {}) => axios.request<ResponseType>({ url, method, params, data: body, timeout: 10000 });
