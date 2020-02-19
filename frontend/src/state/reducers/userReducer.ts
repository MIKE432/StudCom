import { Action } from '../../types/reduxTypes/actionTypes/generalActionTypes'
import { LOGIN_USER, LOGOUT_USER } from '../../types/reduxTypes/actionTypes/userActionsTypes'
import { UserState } from '../../types/reduxTypes/stateTypes/userSteteTypes';

export default function userReducer(state: UserState = null, action: Action): UserState {
    switch(action.type) {
        case LOGIN_USER: return {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email
        }
        case LOGOUT_USER: return null
        default: return state
    } 
}