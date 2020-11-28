import React from 'react';
import MenuLink from './MenuLink';
import UserDropDown from './user-drop-down';
import ErrorBoundary from './ErrorBoundary';

export default function AuthenticatedMenu() {
  return (
    <ErrorBoundary>
      <nav className="flex flex-row items-center justify-end">
        <div className="flex flex-row items-center justify-end">
          <MenuLink to="/ask" label="Ask" />
        </div>
        <div className="border-l pl-4">
          <UserDropDown />
        </div>
      </nav>
    </ErrorBoundary>
  );
}
