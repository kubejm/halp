import React from 'react';
import clsx from 'clsx';
import { useStore } from '../../../../store';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  hasUserVoted: boolean;
  isUserAuthor: boolean;
}

export default function VoteButton({
  children,
  onClick,
  hasUserVoted,
  isUserAuthor,
}: Props) {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <button
      onClick={onClick}
      disabled={!isAuthenticated || isUserAuthor || hasUserVoted}
      className={clsx(
        'focus:outline-none',
        hasUserVoted && 'text-purple-600',
        !isAuthenticated && 'disabled:opacity-60'
      )}
    >
      {children}
    </button>
  );
}
