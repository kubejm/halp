import create from 'zustand';
import { auth } from '../utils';

type State = {
  isAuthenticated: boolean;
  handleAuthentication: () => void;
  logOut: () => void;
};

export const useStore = create<State>((set) => ({
  isAuthenticated: auth.isAuthenticated(),
  handleAuthentication: () => {
    auth.check();

    const isAuthenticated = auth.isAuthenticated();
    set({ isAuthenticated });
  },
  logOut: () => {
    auth.logOut();
    set({ isAuthenticated: false });
  },
}));

// TODO: make this a utility module?
