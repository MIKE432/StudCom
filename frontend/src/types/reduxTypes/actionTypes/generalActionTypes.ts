export interface AnyAction {
    type: any;
}

export interface Action extends AnyAction {
    type: string;
    payload: any;
}

export interface WrappedAction extends Action {
    type: string;
    baseType: string;
    payload: any;
}

//all actions have to inherit from Action interface