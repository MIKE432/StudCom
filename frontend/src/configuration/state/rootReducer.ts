import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history'
import { State, Reducer } from '../../types/reduxTypes/reducersTypes';
import apiReducer from '../../state/reducers/apiReducer'
import userReducer from '../../state/reducers/userReducer';

export default (history: History): Reducer<any> => {

    const allReducers = combineReducers({
        router: connectRouter(history),
        api: apiReducer,
        user: userReducer
    })

    return function rootReducer(state: State, action: any) {
        return allReducers(state, action);
    }
}