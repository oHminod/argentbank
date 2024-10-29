import { AuthState, AuthActionTypes, LOGIN, LOGOUT, UPDATE_USER_DATA } from '../../utils/types';

const initialState: AuthState = {
    token: null,
    userData: {
        firstName: '',
        lastName: '',
    },
    rememberMe: false,
};

const authReducer = (
    state: AuthState = initialState,
    action: AuthActionTypes
): AuthState => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.payload.token,
                userData: action.payload.userData,
                rememberMe: action.payload.rememberMe,
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                userData: { firstName: '', lastName: '' },
                rememberMe: false,
            };
        case UPDATE_USER_DATA:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
