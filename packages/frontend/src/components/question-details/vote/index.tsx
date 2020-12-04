import React from 'react';
import Upvote from './Upvote';
import Downvote from './Downvote';
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
      <Upvote id={id} />
      <div>{question.votes}</div>
      <Downvote id={id} />
    </div>
  );
}
