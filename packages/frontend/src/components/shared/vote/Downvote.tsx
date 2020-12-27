import React from 'react';
import VoteButton from './VoteButton';

interface Props {
  hasUserDownvoted: boolean;
  isUserAuthor: boolean;
  handleClick: () => void;
}

export default function Downvote(props: Props) {
  return (
    <VoteButton
      onClick={props.handleClick}
      hasUserVoted={props.hasUserDownvoted}
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
          strokeWidth={props.hasUserDownvoted ? 3 : 2}
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </VoteButton>
  );
}
