export type userData = {
    firstName: string;
    lastName: string;
};

export interface AuthState {
    token: string | null;
    userData: userData;
    rememberMe: boolean;
}

// Types des actions
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

interface LoginAction {
    type: typeof LOGIN;
    payload: {
        token: string;
        userData: userData;
        rememberMe: boolean;
    };
}

interface LogoutAction {
    type: typeof LOGOUT;
}

interface UpdateUserDataAction {
    type: typeof UPDATE_USER_DATA;
    payload: userData;
}

export type AuthActionTypes = LoginAction | LogoutAction | UpdateUserDataAction;
