import { RouterState } from "connected-react-router";
import { Action } from './actionTypes'
export type State = {
    router: RouterState<{}>;
}

type Reducer<S> = (state: S, action: Action) => S