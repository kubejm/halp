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
    auth.check();

    const isAuthenticated = auth.isAuthenticated();
    set({ isAuthenticated });
  },
  logout: () => {
    auth.logout();
    set({ isAuthenticated: false });
  },
}));

// TODO: make this a utility module?
