import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function UnauthenticatedMenu() {
  const defaultStyles =
    'ml-4 py-1 px-2 rounded border-2 transition duration-300 ease-in-out';

  return (
    <nav className="flex flex-row items-center text-sm">
      <Link
        to="/sign-in"
        className={clsx(
          defaultStyles,
          'bg-white text-purple-500 hover:bg-purple-500 hover:text-white border-white hover:border-purple-200'
        )}
      >
        Sign In
      </Link>
      <Link
        to="/sign-up"
        className={clsx(
          defaultStyles,
          'bg-purple-500 text-white hover:bg-white hover:text-purple-600 border-purple-500 hover:border-purle-100'
        )}
      >
        Sign Up
      </Link>
    </nav>
  );
}
