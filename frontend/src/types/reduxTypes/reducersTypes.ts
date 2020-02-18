import { RouterState } from "connected-react-router";
import { Action, AnyAction } from './actionTypes/generalActionTypes'

export type State = {
    router: RouterState<{}>;
}

export type Reducer<S> = (state: S, action: AnyAction) => S