import create from 'zustand';
import { auth } from '../utils';

type State = {
  isAuthenticated: boolean;
  handleAuthentication: () => void;
  logout: () => void;
};

// TODO: log vs sign?
export const useStore = create<State>((set) => ({
  isAuthenticated: auth.isAuthenticated(),
  handleAuthentication: () => {
    auth.handleAuthentication();

    const isAuthenticated = auth.isAuthenticated();
    set({ isAuthenticated });
  },
  logout: () => {
    auth.clear();
    set({ isAuthenticated: false });
  },
}));

// TODO: make this a utility module?
