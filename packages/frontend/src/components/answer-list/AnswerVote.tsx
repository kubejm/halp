import React from 'react';
import Vote from '../vote';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { AnswerVoteQuery } from '../../__generated__/AnswerVoteQuery.graphql';

interface Props {
  id: string;
}

export default function AnswerVote({ id }: Props) {
  const { answer } = useLazyLoadQuery<AnswerVoteQuery>(
    graphql`
      query AnswerVoteQuery($input: AnswerByIdInput!) {
        answer(input: $input) {
          id
          voteCount
          hasUserUpvoted
          hasUserDownvoted
          isUserAuthor
        }
      }
    `,
    {
      input: {
        id,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <Vote
      hasUserDownvoted={answer.hasUserDownvoted}
      hasUserUpvoted={answer.hasUserUpvoted}
      id={id}
      isUserAuthor={answer.isUserAuthor}
      voteCount={answer.voteCount}
    />
  );
}
