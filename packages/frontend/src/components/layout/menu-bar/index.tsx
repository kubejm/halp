import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store';
import MenuLink from './MenuLink';
import SignOutButton from './SignOutButton';

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
        <div>
          {isAuthenticated && <MenuLink to="/ask" label="Ask" />}
          {!isAuthenticated && <MenuLink to="/login" label="Log In" />}
          {isAuthenticated && <SignOutButton />}
        </div>
      </div>
    </nav>
  );
}
