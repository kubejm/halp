import React from 'react';
import { Vote } from '../../vote';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionVoteQuery } from '../../../__generated__/QuestionVoteQuery.graphql';
import UpvoteQuestion from './UpvoteQuestion';
import DownvoteQuestion from './DownvoteQuestion';

interface Props {
  id: string;
}

export default function QuestionVote({ id }: Props) {
  const { question } = useLazyLoadQuery<QuestionVoteQuery>(
    graphql`
      query QuestionVoteQuery($input: QuestionByIdInput!) {
        question(input: $input) {
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
      voteCount={question.voteCount}
      upvoteComponent={
        <UpvoteQuestion
          id={id}
          hasUserUpvoted={question.hasUserUpvoted}
          isUserAuthor={question.isUserAuthor}
        />
      }
      downvoteComponent={
        <DownvoteQuestion
          id={id}
          hasUserDownvoted={question.hasUserDownvoted}
          isUserAuthor={question.isUserAuthor}
        />
      }
    />
  );
}
