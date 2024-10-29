import { RootState } from '../reducers/';

export const loadState = (): Partial<RootState> | undefined => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined; // Laisser le reducer gérer l'état initial
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export const saveState = (state: RootState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('appState', serializedState);
    } catch {
        // Ignorer les erreurs d'écriture
    }
};
