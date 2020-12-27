import React from 'react';
import { Upvote } from '../../vote';
import { graphql, useMutation } from 'react-relay/hooks';
import { UpvoteAnswerMutation } from '../../../__generated__/UpvoteAnswerMutation.graphql';

interface Props {
  id: string;
  hasUserUpvoted: boolean;
  isUserAuthor: boolean;
}

export default function UpvoteAnswer({
  id,
  hasUserUpvoted,
  isUserAuthor,
}: Props) {
  const [commit] = useMutation<UpvoteAnswerMutation>(graphql`
    mutation UpvoteAnswerMutation($input: AnswerByIdInput!) {
      upvoteAnswer(input: $input) {
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
    <Upvote
      hasUserUpvoted={hasUserUpvoted}
      isUserAuthor={isUserAuthor}
      handleClick={handleClick}
    />
  );
}
