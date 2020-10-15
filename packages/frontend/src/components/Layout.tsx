import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Logo() {
  return (
    <div className="text-white">Halp!</div>
  );
}

function Header() {
  return (
    <nav className="flex items-center justify-between bg-purple-800 px-8 h-16">
      <Logo />
    </nav>
  );
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
}
