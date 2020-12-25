import React from 'react';
import SortLink from './SortLink';
import { graphql, useFragment } from 'react-relay/hooks';
import { questionSorter_questionsPage$key } from '../../__generated__/questionSorter_questionsPage.graphql';

interface QuestionSorterProps {
  orderBy: string;
  questionsPage: questionSorter_questionsPage$key;
  tag?: string;
}

// TODO: more intelligent way to set border right to 0
// TODO: share enums
export default function QuestionSorter(props: QuestionSorterProps) {
  const { questionCount } = useFragment(
    graphql`
      fragment questionSorter_questionsPage on QuestionsPage {
        questionCount
      }
    `,
    props.questionsPage
  );

  const headerLabel = props.tag
    ? `Questions tagged '${props.tag}'`
    : 'Questions';

  return (
    <div className="flex flex-wrap bg-white border-l border-b p-4">
      <h1 className="text-xl min-w-full">{headerLabel}</h1>
      <div className="flex justify-between min-w-full">
        <div className="flex flex-col-reverse">
          <div className="text-xs text-gray-500">
            {questionCount} questions asked
          </div>
        </div>
        <div>
          <ul className="flex list-none rounded text-xs text-purple-500">
            <SortLink
              label="New"
              to="/"
              selected={props.orderBy === 'NEW'}
              className="rounded-l border-r-0"
            />
            <SortLink
              label="Active"
              to="/?orderBy=active"
              selected={props.orderBy === 'ACTIVE'}
              className=" border-r-0"
            />
            <SortLink
              label="Most Votes"
              to="/?orderBy=votes"
              selected={props.orderBy === 'VOTES'}
              className="rounded-r"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
