import React from 'react';
import { Upvote } from '../../../vote';
import { graphql, useMutation } from 'react-relay/hooks';
import { UpvoteQuestionMutation } from '../../../../__generated__/UpvoteQuestionMutation.graphql';

interface Props {
  id: string;
  hasUserUpvoted: boolean;
  isUserAuthor: boolean;
}

export default function UpvoteQuestion({
  id,
  hasUserUpvoted,
  isUserAuthor,
}: Props) {
  const [commit] = useMutation<UpvoteQuestionMutation>(graphql`
    mutation UpvoteQuestionMutation($input: QuestionByIdInput!) {
      upvoteQuestion(input: $input) {
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
