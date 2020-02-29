import { Action } from '../../types/reduxTypes/actionTypes/generalActionTypes'
import { LOGIN_USER, LOGOUT_USER, GET_USER, REGISTER_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes'
import { UserState } from '../../types/reduxTypes/stateTypes/userSteteTypes';

export default function userReducer(state: UserState = null, action: Action): UserState {
    switch(action.type) {
        case `${GET_USER}/SUCCESS`: {
            return !action.payload.firstName ? null : {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        }
        case `${LOGIN_USER}/SUCCESS`: {
            return !action.payload.firstName ? null : {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        }
        case `${REGISTER_USER}/SUCCESS`: {
            return !action.payload.firstName ? null : {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        }
        case LOGOUT_USER: return null
        default: return state
    } 
}