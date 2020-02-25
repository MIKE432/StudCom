import { takeEvery, call, put } from 'redux-saga/effects';
import { apiCall } from '../../rest/axios/ApiCaller';
import { UserAction, REGISTER_USER, LOGOUT_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes';
import { storeUserToState, deleteUserFromState, registerUserSuccess } from '../actions/userActions';
import { GET_USER, LOGIN_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes'
import { safeRest } from '../../rest/sagas/restSaga';

export function* getUser(action: UserAction) {
    const user = yield call(apiCall, '/api/user', 'GET', {}, {});
    yield put(storeUserToState(user.data));
}

export function* registerUser(action: UserAction) {
    const response = yield call(apiCall, '/api/register', 'POST', {}, action.payload);
    yield put(storeUserToState(response.data));
    yield put(registerUserSuccess(response));
}

export function* loginUser(action: UserAction) {
    const user = yield call(apiCall, '/api/login', 'POST', {}, action.payload);
    yield put(storeUserToState(user))
}

export function* logoutUser(action: UserAction) {
    yield call(apiCall, '/api/logout', 'POST', {}, action.payload);
    yield put(deleteUserFromState());
}

export default function* watch() {
    yield takeEvery(`${GET_USER}/REQUEST`, safeRest(getUser));
    yield takeEvery(`${REGISTER_USER}/REQUEST`, safeRest(registerUser));
    yield takeEvery(`${LOGIN_USER}/REQUEST`, safeRest(registerUser));
    yield takeEvery(`${LOGOUT_USER}/REQUEST`, safeRest(logoutUser));
}