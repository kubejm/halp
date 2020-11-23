import React from 'react';
import { Link } from 'react-router-dom';

export default function UnauthenticatedMenu() {
  return (
    <div>
      <Link to="/sign-in">
        <button className="text-purple-700 bg-gray-50 text-sm ml-3 border border-purple-400 rounded py-1 px-2 hover:bg-purple-900 hover:text-white transition duration-300 ease-in-out focus:outline-none">
          Sign In
        </button>
      </Link>
      <Link to="/sign-up">
        <button className="text-white bg-purple-900 text-sm ml-3 border border-purple-400 rounded py-1 px-2 hover:bg-gray-50 hover:text-purple-700 transition duration-300 ease-in-out focus:outline-none">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
