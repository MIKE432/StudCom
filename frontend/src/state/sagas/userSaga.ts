import { push } from 'connected-react-router';
import { takeEvery, call, put } from 'redux-saga/effects';
import { apiCall } from '../../rest/axios/ApiCaller';
import { UserAction, REGISTER_USER, LOGOUT_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes';
import { deleteUserFromState, registerUserSuccess, getUserSuccess, loginUserSuccess } from '../actions/userActions';
import { GET_USER, LOGIN_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes'
import { safeRest } from '../../rest/sagas/restSaga';

export function* getUser(action: UserAction) {
    const response = yield call(apiCall, '/api/user', 'GET', {}, {});
    yield put(getUserSuccess(response.data))
}

export function* registerUser(action: UserAction) {
    const response = yield call(apiCall, '/api/register', 'POST', {}, action.payload);
    yield put(registerUserSuccess(response.data));
    yield put(push('/'));
}

export function* loginUser(action: UserAction) {
    const response = yield call(apiCall, '/api/login', 'POST', {}, action.payload);
    yield put(loginUserSuccess(response.data))
    yield put(push('/'));
}

export function* logoutUser(action: UserAction) {
    yield call(apiCall, '/api/logout', 'POST', {}, action.payload);
    yield put(deleteUserFromState());
    yield put(push('/'));
}

export default function* watch() {
    yield takeEvery(`${GET_USER}/REQUEST`, safeRest(getUser));
    yield takeEvery(`${REGISTER_USER}/REQUEST`, safeRest(registerUser));
    yield takeEvery(`${LOGIN_USER}/REQUEST`, safeRest(loginUser));
    yield takeEvery(`${LOGOUT_USER}/REQUEST`, safeRest(logoutUser));
}