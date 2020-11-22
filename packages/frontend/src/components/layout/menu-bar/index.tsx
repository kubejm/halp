import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store';
import AuthenticatedMenu from './authenticated-menu';
import UnauthenticatedMenu from './unauthenticated-menu';

function Logo() {
  return (
    <div className="flex-shrink-0 text-white text-lg font-bold">Halp!</div>
  );
}

export default function MenuBar() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <nav className="bg-purple-800 border-b-4 border-purple-400">
      <div className="flex items-center justify-between px-4 h-16 max-w-3xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        <Suspense fallback={null}>
          {isAuthenticated && <AuthenticatedMenu />}
          {!isAuthenticated && <UnauthenticatedMenu />}
        </Suspense>
      </div>
    </nav>
  );
}
