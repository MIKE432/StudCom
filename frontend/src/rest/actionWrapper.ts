import { Action } from '../types/reduxTypes/actionTypes/generalActionTypes'

export function requestAction<P extends Action>(action: P): P {
    return {
        ...action,
        type: action.type + '/REQUEST',

    }
}