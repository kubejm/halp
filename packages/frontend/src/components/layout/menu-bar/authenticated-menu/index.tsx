import React from 'react';
import MenuLink from './MenuLink';
import UserDropDown from '../UserDropDown';

export default function AuthenticatedMenu() {
  return (
    <nav className="flex flex-row items-center justify-end">
      <div className="flex flex-row items-center justify-end">
        <MenuLink to="/ask" label="Ask" />
      </div>
      <div className="border-l">
        <UserDropDown />
      </div>
    </nav>
  );
}
