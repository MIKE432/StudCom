import { Action } from '../types/reduxTypes/actionTypes/generalActionTypes';

/*
requestAction: {
    url: string,
}






*/

export function requestAction<P extends Action>(action: P): P {
    return {
        ...action,
        type: action.type + '/REQUEST',
    }
}

export function successAction<P extends Action>(action: P): P {
    
    return {
        ...action,
        type: action.type + '/SUCCESS',
    }
}

export function errorAction<P extends Action>(action: P): P {
    
    return {
        ...action,
        type: action.type + '/ERROR',
    }
}