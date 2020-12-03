import React from 'react';
import { graphql, useMutation } from 'react-relay/hooks';
import { UpvoteMutation } from '../../../__generated__/UpvoteMutation.graphql';

interface Props {
  id: string;
}

export default function Upvote({ id }: Props) {
  const [commit] = useMutation<UpvoteMutation>(graphql`
    mutation UpvoteMutation($input: UpvoteQuestionInput!) {
      upvoteQuestion(input: $input) {
        votes
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
    <button onClick={handleClick}>
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
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
    </button>
  );
}
