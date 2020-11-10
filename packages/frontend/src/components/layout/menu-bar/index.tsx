import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store';
import SignOutButton from './SignOutButton';

function Logo() {
  return (
    <div className="flex-shrink-0 text-white text-lg font-bold">Halp!</div>
  );
}

export default function MenuBar() {
  const { isAuthenticated } = useStore((state) => ({
    isAuthenticated: state.isAuthenticated,
  }));

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
          {isAuthenticated && <SignOutButton />}
        </div>
      </div>
    </nav>
  );
}
