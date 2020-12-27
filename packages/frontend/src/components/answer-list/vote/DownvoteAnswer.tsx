import React from 'react';
import { Downvote } from '../../vote';
import { graphql, useMutation } from 'react-relay/hooks';
import { DownvoteAnswerMutation } from '../../../__generated__/DownvoteAnswerMutation.graphql';

interface Props {
  id: string;
  hasUserDownvoted: boolean;
  isUserAuthor: boolean;
}

export default function DownvoteAnswer({
  id,
  hasUserDownvoted,
  isUserAuthor,
}: Props) {
  const [commit] = useMutation<DownvoteAnswerMutation>(graphql`
    mutation DownvoteAnswerMutation($input: AnswerByIdInput!) {
      downvoteAnswer(input: $input) {
        voteCount
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
    <Downvote
      hasUserDownvoted={hasUserDownvoted}
      isUserAuthor={isUserAuthor}
      handleClick={handleClick}
    />
  );
}
