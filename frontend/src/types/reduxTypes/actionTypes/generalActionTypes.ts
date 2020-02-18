export interface AnyAction {
    type: any;
}

export interface Action extends AnyAction {
    type: string;
    payload: any
}

//all actions have to inherit from Action interface