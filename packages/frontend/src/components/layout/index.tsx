import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';

interface Props {
  children?: React.ReactNode;
}

function Logo() {
  return (
    <div className="flex-shrink-0 text-white text-lg font-bold">Halp!</div>
  );
}

function Header() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
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
