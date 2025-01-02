export enum LoginKind {
    SET_PAYLOAD = 'SET_PAYLOAD',
    SUBMIT_PAYLOAD = 'SUBMIT_PAYLOAD'
}
export interface LoginAction {
    type: LoginKind
    payload?: Partial<LoginState>
}
interface LoginState {
    username: string
    password: string
}
export function loginReducer(state: LoginState, action: LoginAction) {
    const { type, payload } = action;
    switch (type) {
        case LoginKind.SET_PAYLOAD:
            return {
                ...state,
                ...payload
            }
        case LoginKind.SUBMIT_PAYLOAD:
            console.log('Submitted:', state.username, state.password);
            return state;
        default:
            return state
    }
}