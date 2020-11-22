import React from 'react';
import MenuLink from '../MenuLink';
import UserDropDown from '../UserDropDown';

export default function AuthenticatedMenu() {
  return (
    <div>
      <MenuLink to="/ask" label="Ask" />
      <UserDropDown />
    </div>
  );
}
