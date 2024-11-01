import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import rootReducer from "../reducers";

export type RootState = ReturnType<typeof rootReducer>;

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  if (state.auth.rememberMe) {
    saveState(state);
  } else {
    localStorage.removeItem("appState");
  }
});

export default store;
