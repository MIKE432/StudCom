import { all, call } from 'redux-saga/effects';
import userSaga from '../../state/sagas/userSaga';

export default function* () {
    yield all([
        call(userSaga)
    ])
}