import { userData, LOGIN, LOGOUT, UPDATE_USER_DATA, AuthActionTypes } from '../../utils/types';

export const login = (token: string, userData: userData, rememberMe: boolean): AuthActionTypes => {
    return {
        type: LOGIN,
        payload: { token, userData, rememberMe },
    };
};

export const logout = (): AuthActionTypes => {
    return {
        type: LOGOUT,
    };
};

export const updateUserData = (userData: userData): AuthActionTypes => {
    return {
        type: UPDATE_USER_DATA,
        payload: userData,
    };
};
