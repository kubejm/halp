import React from 'react';
import { Vote } from '../../../vote';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { AnswerVoteQuery } from '../../../../__generated__/AnswerVoteQuery.graphql';
import UpvoteAnswer from './UpvoteAnswer';
import DownvoteAnswer from './DownvoteAnswer';

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
      voteCount={answer.voteCount}
      upvoteComponent={
        <UpvoteAnswer
          id={id}
          hasUserUpvoted={answer.hasUserUpvoted}
          isUserAuthor={answer.isUserAuthor}
        />
      }
      downvoteComponent={
        <DownvoteAnswer
          id={id}
          hasUserDownvoted={answer.hasUserDownvoted}
          isUserAuthor={answer.isUserAuthor}
        />
      }
    />
  );
}
