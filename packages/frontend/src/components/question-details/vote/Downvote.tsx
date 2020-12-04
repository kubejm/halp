import React from 'react';
import { graphql, useMutation } from 'react-relay/hooks';
import { DownvoteMutation } from '../../../__generated__/DownvoteMutation.graphql';

interface Props {
  id: string;
}

export default function Downvote({ id }: Props) {
  const [commit] = useMutation<DownvoteMutation>(graphql`
    mutation DownvoteMutation($input: DownvoteQuestionInput!) {
      downvoteQuestion(input: $input) {
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
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
  );
}
