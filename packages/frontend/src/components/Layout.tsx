import React from 'react';

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray- 100 min-h-screen flex flex-col">{children}</div>
  );
}
