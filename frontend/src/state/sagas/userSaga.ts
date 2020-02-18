import { takeEvery, call } from 'redux-saga/effects';
import { apiCall } from '../../rest/axios/ApiCaller';
import { UserAction } from '../../types/reduxTypes/actionTypes/userActionsTypes';

export function* getUser(action: UserAction) {
    const user = yield call(apiCall, '/api/user', 'GET', {}, {});


}

export default function* watch() {
    
}