import React from 'react';
import MenuLink from '../MenuLink';
import UserDropDown from '../UserDropDown';

export default function AuthenticatedMenu() {
  return (
    <nav>
      <MenuLink to="/ask" label="Ask" />
      <UserDropDown />
    </nav>
  );
}
