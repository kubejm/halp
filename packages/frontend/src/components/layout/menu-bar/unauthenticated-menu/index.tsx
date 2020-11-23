import React from 'react';
import { Link } from 'react-router-dom';

// TODO: abstract buttons out into shared styles
export default function UnauthenticatedMenu() {
  return (
    <div className="flex flex-row items-center text-sm">
      <Link
        to="/sign-in"
        className="ml-4 py-1 px-2 rounded bg-white text-purple-500 hover:bg-purple-500 hover:text-white border-2 border-white hover:border-purple-200 transition duration-300 ease-in-out"
      >
        Sign In
      </Link>
      <Link
        to="/sign-up"
        className="ml-4 py-1 px-2 rounded bg-purple-500 text-white hover:bg-white hover:text-purple-600 border-2 border-purple-500 hover:border-purle-100 transition duration-300 ease-in-out"
      >
        Sign Up
      </Link>
    </div>
  );
}
