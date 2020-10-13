import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray- 100 min-h-screen flex flex-col">
      {children}
    </div>
  );
}
