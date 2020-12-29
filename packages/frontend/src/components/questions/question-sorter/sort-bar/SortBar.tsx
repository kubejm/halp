import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function SortBar({ children }: Props) {
  return (
    <ul className="flex list-none rounded text-xs text-purple-500 rounded">
      {children}
    </ul>
  );
}
