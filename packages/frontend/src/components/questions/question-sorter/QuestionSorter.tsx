import React from 'react';
import SortLink from './SortLink';
import { graphql, useFragment } from 'react-relay/hooks';
import { QuestionSorter_questionsPage$key } from '../../../__generated__/QuestionSorter_questionsPage.graphql';
import { OrderQuestionsBy } from '../../../types';

interface QuestionSorterProps {
  orderBy: string;
  questionsPage: QuestionSorter_questionsPage$key;
  tag?: string;
}

// TODO: more intelligent way to set border right to 0
export default function QuestionSorter(props: QuestionSorterProps) {
  const { questionCount } = useFragment(
    graphql`
      fragment QuestionSorter_questionsPage on QuestionsPage {
        questionCount
      }
    `,
    props.questionsPage
  );

  const headerLabel = props.tag
    ? `Questions tagged '${props.tag}'`
    : 'Questions';

  const basePath = window.location.pathname;

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
              label="Active"
              to={basePath}
              selected={props.orderBy === OrderQuestionsBy.ACTIVE}
              className="rounded-l border-r-0"
            />
            <SortLink
              label="Most Views"
              to={`${basePath}?orderBy=views`}
              selected={props.orderBy === OrderQuestionsBy.VIEWS}
              className=" border-r-0"
            />
            <SortLink
              label="Most Votes"
              to={`${basePath}?orderBy=votes`}
              selected={props.orderBy === OrderQuestionsBy.VOTES}
              className=" border-r-0"
            />
            <SortLink
              label="New"
              to={`${basePath}?orderBy=new`}
              selected={props.orderBy === OrderQuestionsBy.NEW}
              className="rounded-r"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
