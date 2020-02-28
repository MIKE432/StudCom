export type Method =
| 'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
| 'link' | 'LINK'
| 'unlink' | 'UNLINK';

export type RequestBody = Record<string, any>

export type RequestParams = Record<string, any>

export type ResponseType = Record<string, any>

export type Response = {
    data: any;
    status: number;
}
