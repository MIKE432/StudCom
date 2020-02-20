import { call, put } from 'redux-saga/effects';
import { Action } from '../../types/reduxTypes/actionTypes/generalActionTypes';
import { errorAction } from '../actionWrapper';

function* recoverRest(error: any, action: Action) {
    yield put(errorAction({ type: action.type.replace('/REQUEST', ''), payload: { status: error.status, data: null }}));

}

type RecoverRest = (error: any, action: Action) => void;

const safe = (recoverRest: RecoverRest, saga: any, ...args: any) => function* (action: Action) {
    try {
        yield call(saga, action, ...args);
    } catch(error) {
        yield recoverRest(error, action)
    }
}

export const safeRest = (saga: any, ...args: any) => safe(recoverRest, saga, ...args);