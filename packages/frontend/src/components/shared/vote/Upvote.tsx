import React from 'react';
import VoteButton from './VoteButton';

interface Props {
  hasUserUpvoted: boolean;
  isUserAuthor: boolean;
  handleClick: () => void;
}

export default function Upvote(props: Props) {
  return (
    <VoteButton
      onClick={props.handleClick}
      hasUserVoted={props.hasUserUpvoted}
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
          strokeWidth={props.hasUserUpvoted ? 3 : 2}
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
    </VoteButton>
  );
}
