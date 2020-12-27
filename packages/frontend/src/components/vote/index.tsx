import React from 'react';
import { Downvote, Upvote } from './vote-buttons';

interface Props {
  hasUserDownvoted: boolean;
  hasUserUpvoted: boolean;
  id: string;
  isUserAuthor: boolean;
  voteCount: number;
}

export default function Vote(props: Props) {
  return (
    <div className="flex flex-col w-6 mr-4 text-gray-600 text-center">
      <Upvote
        handleClick={() => {}}
        hasUserVoted={props.hasUserUpvoted}
        isUserAuthor={props.isUserAuthor}
      />
      <div>{props.voteCount}</div>
      <Downvote
        handleClick={() => {}}
        hasUserVoted={props.hasUserDownvoted}
        isUserAuthor={props.isUserAuthor}
      />
    </div>
  );
}
