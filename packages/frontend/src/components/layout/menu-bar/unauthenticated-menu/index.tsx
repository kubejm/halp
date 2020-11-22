import React from 'react';
import MenuLink from '../MenuLink';

export default function UnauthenticatedMenu() {
  return (
    <div>
      <MenuLink to="/sign-in" label="Sign In" />
      <MenuLink to="/sign-up" label="Sign Up" />
    </div>
  );
}
