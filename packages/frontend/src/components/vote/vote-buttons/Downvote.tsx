import React from 'react';
import VoteButton from './VoteButton';

interface Props {
  hasUserVoted: boolean;
  isUserAuthor: boolean;
  handleClick: () => void;
}

export default function Downvote(props: Props) {
  return (
    <VoteButton
      onClick={props.handleClick}
      hasUserVoted={props.hasUserVoted}
      isUserAuthor={props.isUserAuthor}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={props.hasUserVoted ? 3 : 2}
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </VoteButton>
  );
}
