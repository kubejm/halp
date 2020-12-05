import React from 'react';
import clsx from 'clsx';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  hasUserVoted: boolean;
}

export default function VoteButton({ children, onClick, hasUserVoted }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={hasUserVoted}
      className={clsx('focus:outline-none', hasUserVoted && 'text-purple-600')}
    >
      {children}
    </button>
  );
}
