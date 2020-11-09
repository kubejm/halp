import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import { graphql, useMutation } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';
import { layoutMutation } from '../../__generated__/layoutMutation.graphql';

interface Props {
  children?: React.ReactNode;
}

function Logo() {
  return (
    <div className="flex-shrink-0 text-white text-lg font-bold">Halp!</div>
  );
}

function Header() {
  const { isAuthenticated, logout } = useStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    logout: state.logout,
  }));

  const history = useHistory();
  const [commit] = useMutation<layoutMutation>(graphql`
    mutation layoutMutation {
      signOut {
        ok
      }
    }
  `);

  async function signOut() {
    commit({
      variables: {},
      onCompleted() {
        logout();
        history.push('/');
      },
    });
  }

  return (
    <nav className="bg-purple-800 border-b-4 border-purple-400">
      <div className="flex items-center justify-between px-4 h-16 max-w-3xl mx-auto">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          {isAuthenticated && (
            <Link to="/ask" className="text-white">
              Ask
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/login" className="text-white ml-4">
              Login
            </Link>
          )}
          {isAuthenticated && (
            <button className="text-white ml-4" onClick={signOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-2xl w-full mx-auto">
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </div>
  );
}
