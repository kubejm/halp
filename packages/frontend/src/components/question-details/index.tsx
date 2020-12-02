import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { questionDetailsQuery } from '../../__generated__/questionDetailsQuery.graphql';

interface Props {
  id: string;
}

function UpArrow() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 15l7-7 7 7"
      ></path>
    </svg>
  );
}

function DownArrow() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
}

export default function QuestionDetails({ id }: Props) {
  const { viewQuestion: question } = useLazyLoadQuery<questionDetailsQuery>(
    graphql`
      mutation questionDetailsQuery($input: ViewQuestionInput!) {
        viewQuestion(input: $input) {
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
    }
  );

  return (
    <div className="bg-white border-l border-b p-4">
      <div className="border-b mb-4">
        <h1 className="text-2xl mb-2">{question.question}</h1>
        <div className="flex text-xs text-gray-600 pb-4">
          <div className="mr-5">Asked {question.createdAtRelative}</div>
          <div>Viewed {question.views} times</div>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 text-gray-600 text-center">
          <UpArrow />
          <div>{question.votes}</div>
          <DownArrow />
        </div>
        <div className="text-sm">{question.body}</div>
      </div>
    </div>
  );
}
