import { Action, WrappedAction } from '../../types/reduxTypes/actionTypes/generalActionTypes';
import { ApiState } from '../../types/reduxTypes/stateTypes/apiStateTypes';
import { SUCCESS_ACTIONS, ERROR_ACTIONS, REQUEST_ACTIONS } from '../../types/reduxTypes/actionTypes/apiActionsTypes';


const initalState: ApiState = {
    isLoading: false,
    lastResponses: null
}

export default function apiReducer(state: ApiState = initalState, action: WrappedAction): ApiState {
        
    if(action.type.endsWith(SUCCESS_ACTIONS)) {
        return {
            ...state,
            isLoading: false,
            lastResponses: {
                ...state.lastResponses,
                [action.baseType]: {
                    status: action.payload.status,
                    data: action.payload.data
                }
            }
        }
    } else if(action.type.endsWith(ERROR_ACTIONS)) {
        return {
            ...state,
            isLoading: false,
            lastResponses: {
                ...state.lastResponses,
                [action.baseType]: {
                    status: action.payload.status,
                    data: null
                }
            }
        }
    } else if(action.type.endsWith(REQUEST_ACTIONS)) {
        return {
            ...state,
            isLoading: true,
            lastResponses: {
                ...state.lastResponses,
                [action.baseType]: {
                    status: null,
                    data: null
                }
            }
        }
    } else {
        return state
    }
}