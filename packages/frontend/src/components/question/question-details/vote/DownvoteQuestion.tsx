import React from 'react';
import { Downvote } from '../../../vote';
import { graphql, useMutation } from 'react-relay/hooks';
import { DownvoteQuestionMutation } from '../../../../__generated__/DownvoteQuestionMutation.graphql';

interface Props {
  id: string;
  hasUserDownvoted: boolean;
  isUserAuthor: boolean;
}

export default function DownvoteQuestion({
  id,
  hasUserDownvoted,
  isUserAuthor,
}: Props) {
  const [commit] = useMutation<DownvoteQuestionMutation>(graphql`
    mutation DownvoteQuestionMutation($input: QuestionByIdInput!) {
      downvoteQuestion(input: $input) {
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
