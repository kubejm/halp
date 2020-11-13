import React from 'react';
import { Link } from 'react-router-dom';

interface MenuLinkProps {
  to: string;
  label: string;
}

export default function MenuLink({ to, label }: MenuLinkProps) {
  return (
    <Link
      to={to}
      className="text-white ml-4 hover:bg-purple-600 rounded px-3 py-2"
    >
      {label}
    </Link>
  );
}
