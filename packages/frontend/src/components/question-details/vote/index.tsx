import React from 'react';
import { Downvote, Upvote } from './vote-buttons';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { voteQuery } from '../../../__generated__/voteQuery.graphql';

interface Props {
  id: string;
}

export default function Vote({ id }: Props) {
  const { question } = useLazyLoadQuery<voteQuery>(
    graphql`
      query voteQuery($input: GetQuestionInput!) {
        question(input: $input) {
          id
          votes
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
    <div className="flex flex-col w-6 mr-4 text-gray-600 text-center">
      <Upvote
        id={id}
        hasUserVoted={question.hasUserUpvoted}
        isUserAuthor={question.isUserAuthor}
      />
      <div>{question.votes}</div>
      <Downvote
        id={id}
        hasUserVoted={question.hasUserDownvoted}
        isUserAuthor={question.isUserAuthor}
      />
    </div>
  );
}
