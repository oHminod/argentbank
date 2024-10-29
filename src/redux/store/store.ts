import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '../reducers/';

import { loadState, saveState } from './localStorage';

const persistedState: Partial<RootState> | undefined = loadState();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
});

store.subscribe(() => {
    const state: RootState = store.getState();
    if (state.auth.rememberMe) {
        saveState(state);
    } else {
        localStorage.removeItem('appState');
    }
});

export default store;
