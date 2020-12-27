import React from 'react';
import MenuLink from './MenuLink';
import { UserDropDown } from './user-drop-down';

export default function AuthenticatedMenu() {
  return (
    <nav className="flex flex-row items-center justify-end">
      <div className="flex flex-row items-center justify-end">
        <MenuLink to="/ask" label="Ask" />
        <MenuLink to="/tags" label="Tags" />
      </div>
      <div className="border-l pl-4">
        <UserDropDown />
      </div>
    </nav>
  );
}
