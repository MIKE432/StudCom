import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history'
import { Action } from '../../types/reduxTypes/actionTypes'
import { State } from '../../types/reduxTypes/reducersTypes'

export default (history: History) => {

    const allReducers = combineReducers({
        router: connectRouter(history)
    })

    return function rootReducer(state: State, action: any) {
        return allReducers(state, action);
    }
}