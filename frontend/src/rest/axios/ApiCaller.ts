import axios from 'axios';
import { Method, RequestBody, RequestParams, ResponseType } from '../../types/apiTypes';

const apiRequest = (url: string, method: Method = 'GET', params = {}, body = {}) => axios.request<ResponseType>({ url, method, params, data: body, timeout: 10000 });

export const apiCall = async (url: string, method: Method, params: RequestParams, body: RequestBody) => {
    
    let response;

    try {
        response = await apiRequest(url, method, params, body)
    } catch(e) {
        response = {
            status: e.response.status,
            data: null
        }
    }

    const status = response.status;
    const data = response.data;

    return { data, status }
}


