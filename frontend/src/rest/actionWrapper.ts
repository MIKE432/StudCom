import { Action } from '../types/reduxTypes/actionTypes/generalActionTypes';

export function requestAction<P extends Action>(action: P): P {

    return {
        ...action,
        type: action.type + '/REQUEST',
        baseType: action.type
    }
}

export function successAction<P extends Action>(action: P): P {

    return {
        ...action,
        type: action.type + '/SUCCESS',
        baseType: action.type
    }
}

export function errorAction<P extends Action>(action: P): P {
    
    return {
        ...action,
        type: action.type + '/ERROR',
        baseType: action.type
    }
}