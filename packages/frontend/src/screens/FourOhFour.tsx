import React from 'react';

function SadIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}

export default function FourOhFour() {
  return (
    <>
      <div className="flex">
        <div className="w-auto inline-block m-auto mt-6 bg-white shadow-md rounded p-6">
          <div className="flex">
            <SadIcon />
            <h1 className="ml-2 text-gray-800">Something sad happened</h1>
          </div>
          <div className="w-full text-sm mt-4 text-gray-700">
            Page not found
          </div>
        </div>
      </div>
    </>
  );
}
