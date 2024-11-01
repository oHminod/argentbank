import { userData } from "../../utils/types";

export type LoginAction = {
  type: "LOGIN";
  payload: {
    token: string;
    rememberMe: boolean;
  };
}

export type LogoutAction = {
  type: "LOGOUT";
}

export type UpdateUserDataAction = {
  type: "UPDATE_USER_DATA";
  payload: {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}

// Créer un type global pour toutes les actions possibles
export type AuthAction = LoginAction | LogoutAction | UpdateUserDataAction;

// Définir le type pour l'état initial
export type AuthState = {
  token: string | null;
  userData: userData;
  rememberMe: boolean;
}

const initialState = {
  token: null,
  userData: {
    id: "",
    createdAt: "",
    updatedAt: "",
    email: "",
    firstName: "",
    lastName: "",
  },
  rememberMe: false,
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        rememberMe: action.payload.rememberMe,
      };
    case "LOGOUT":
      return initialState;
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
