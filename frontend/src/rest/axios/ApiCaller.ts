import axios from 'axios';
import { Method, RequestBody, RequestParams, ResponseType } from '../../types/apiTypes';
import { userManagementMethods } from '../../App'
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
    console.log(response)
    const status = response.status;
    const data = response.data;

    if(status === 200) {
        return { data, status }
    }

    if(status === 401) {

        userManagementMethods.logoutUser();
    }

    if(status === 403) {
        //to do
    }

    if(status === 404) {
        //to do
    }

    return { data, status }
}


