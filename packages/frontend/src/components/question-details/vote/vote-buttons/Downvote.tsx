import React from 'react';
import { graphql, useMutation } from 'react-relay/hooks';
import { DownvoteMutation } from '../../../../__generated__/DownvoteMutation.graphql';
import VoteButton from './VoteButton';

interface Props {
  id: string;
  hasUserVoted: boolean;
  isUserAuthor: boolean;
}

export default function Downvote({ id, hasUserVoted, isUserAuthor }: Props) {
  const [commit] = useMutation<DownvoteMutation>(graphql`
    mutation DownvoteMutation($input: DownvoteQuestionInput!) {
      downvoteQuestion(input: $input) {
        votes
        hasUserUpvoted
        hasUserDownvoted
      }
    }
  `);

  const handleClick = () => {
    commit({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  return (
    <VoteButton
      onClick={handleClick}
      hasUserVoted={hasUserVoted}
      isUserAuthor={isUserAuthor}
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
          strokeWidth={hasUserVoted ? 3 : 2}
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </VoteButton>
  );
}
