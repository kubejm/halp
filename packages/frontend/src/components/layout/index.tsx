import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Logo() {
  return (
    <div className="flex-shrink-0 text-white text-lg font-bold">Halp!</div>
  );
}

function Header() {
  return (
    <nav className="bg-purple-800 border-b-4 border-purple-400">
      <div className="flex items-center justify-between px-4 h-16 max-w-3xl mx-auto">
        <Logo />
      </div>
    </nav>
  );
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-2xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
