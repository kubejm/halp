import React, { Suspense } from 'react';
import { MenuBar } from './menu-bar';

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <MenuBar />
      <div className="max-w-2xl w-full mx-auto">
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </div>
  );
}
