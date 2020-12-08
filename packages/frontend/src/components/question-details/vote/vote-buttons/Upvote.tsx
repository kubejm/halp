import React from 'react';
import { graphql, useMutation } from 'react-relay/hooks';
import { UpvoteMutation } from '../../../../__generated__/UpvoteMutation.graphql';
import VoteButton from './VoteButton';

interface Props {
  id: string;
  hasUserVoted: boolean;
  isUserAuthor: boolean;
}

export default function Upvote({ id, hasUserVoted, isUserAuthor }: Props) {
  const [commit] = useMutation<UpvoteMutation>(graphql`
    mutation UpvoteMutation($input: UpvoteQuestionInput!) {
      upvoteQuestion(input: $input) {
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
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
    </VoteButton>
  );
}
