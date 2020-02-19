import * as userTypes from '../../types/reduxTypes/actionTypes/generalActionTypes';
import { requestAction, successAction, errorAction } from '../../rest/actionWrapper';
import {GET_USER} from '../../types/reduxTypes/actionTypes/userActionsTypes';


export const getUser = () => requestAction({type: GET_USER, payload: {}});