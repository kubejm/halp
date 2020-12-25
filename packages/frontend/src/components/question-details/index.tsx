import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { questionDetailsQuery } from '../../__generated__/questionDetailsQuery.graphql';
import Vote from './vote';
import TagList from '../tag-list';

interface Props {
  id: string;
}

export default function QuestionDetails({ id }: Props) {
  const { viewQuestion: question } = useLazyLoadQuery<questionDetailsQuery>(
    graphql`
      mutation questionDetailsQuery($input: ViewQuestionInput!) {
        viewQuestion(input: $input) {
          id
          answers
          body
          createdAtRelative
          question
          tags {
            name
          }
          user {
            username
          }
          views
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
    <div className="bg-white border-l border-b p-4">
      <div className="border-b mb-4">
        <h1 className="text-2xl mb-2">{question.question}</h1>
        <div className="flex text-xs text-gray-600 pb-4">
          <div className="mr-5">Asked {question.createdAtRelative}</div>
          <div className="mr-5">Viewed {question.views} times</div>
        </div>
      </div>
      <div className="flex">
        <Vote id={id} />
        <div className="flex-grow">
          <div className="text-sm">{question.body}</div>
          <div className="flex flex-row-reverse justify-between min-w-full mt-6">
            <div className="bg-purple-100 p-2 rounded text-gray-500 text-sm align-middle w-40 min-w-min">
              <div className="text-xs">Asked by</div>
              <div>{question.user.username}</div>
            </div>
            <TagList tags={question.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
