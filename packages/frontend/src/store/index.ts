import create from 'zustand';
import { auth } from '../utils';

type State = {
  isAuthenticated: boolean;
  authenticate: () => void;
  logOut: () => void;
};

export const useStore = create<State>((set) => ({
  isAuthenticated: auth.isAuthenticated(),
  authenticate: () => {
    auth.authenticate();

    const isAuthenticated = auth.isAuthenticated();
    set({ isAuthenticated });
  },
  logOut: () => {
    auth.logOut();
    set({ isAuthenticated: false });
  },
}));
