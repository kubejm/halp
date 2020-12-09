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
      className="py-1 px-3 mr-3 text-white hover:bg-purple-500 rounded"
    >
      {label}
    </Link>
  );
}
