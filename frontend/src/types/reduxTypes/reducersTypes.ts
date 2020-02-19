import { RouterState } from "connected-react-router";
import { Action, AnyAction } from './actionTypes/generalActionTypes'
import { ApiState } from './stateTypes/apiStateTypes'
import { UserState } from './stateTypes/userSteteTypes';

export type State = {
    router: RouterState<{}>,
    api: ApiState,
    user: UserState,
}

export type Reducer<S> = (state: S, action: AnyAction) => S;