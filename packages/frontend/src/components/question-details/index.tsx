import React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import { QuestionVote } from './vote';
import TagList from '../tag-list';
import { questionDetails_question$key } from '../../__generated__/questionDetails_question.graphql';

interface Props {
  id: string;
  question: questionDetails_question$key;
}

export default function QuestionDetails(props: Props) {
  const question = useFragment(
    graphql`
      fragment questionDetails_question on Question {
        id
        answerCount
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
        voteCount
      }
    `,
    props.question
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
        <QuestionVote id={props.id} />
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
