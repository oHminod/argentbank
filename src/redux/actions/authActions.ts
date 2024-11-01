import { userData } from "../../utils/types";

export const login = (token: string, rememberMe: boolean) => {
  return {
    type: "LOGIN",
    payload: { token, rememberMe },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const updateUserData = (userData: userData) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: userData,
  };
};
