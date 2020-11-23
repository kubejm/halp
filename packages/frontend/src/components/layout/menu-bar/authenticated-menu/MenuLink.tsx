import React from 'react';
import { Link } from 'react-router-dom';

interface MenuLinkProps {
  to: string;
  label: string;
}

export default function MenuLink({ to, label }: MenuLinkProps) {
  return (
    <Link to={to} className="py-2 px-4 text-white">
      {label}
    </Link>
  );
}
