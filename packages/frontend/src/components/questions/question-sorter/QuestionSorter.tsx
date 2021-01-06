import React from 'react';
import { SortBar, SortLink } from './sort-bar';
import { graphql, useFragment } from 'react-relay/hooks';
import { QuestionSorter_questionsPage$key } from '../../../__generated__/QuestionSorter_questionsPage.graphql';
import { OrderQuestionsBy } from '../../../types';
import queryString from 'query-string';

interface QuestionSorterProps {
  orderBy: string;
  questionsPage: QuestionSorter_questionsPage$key;
  tag?: string;
}

const buildUrl = function (orderBy: string) {
  const basePath = window.location.pathname;
  const params = queryString.parse(location.search);

  return `${basePath}?${queryString.stringify({
    ...params,
    orderBy,
  })}`;
};

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

  return (
    <div className="flex flex-wrap bg-white border-l border-b p-4">
      <h1 className="text-xl min-w-full">{headerLabel}</h1>
      <div className="flex justify-between min-w-full">
        <div className="flex flex-col-reverse">
          <div className="text-xs text-gray-500">
            {questionCount} questions asked
          </div>
        </div>
        <SortBar>
          <SortLink
            label="Active"
            to={buildUrl('active')}
            selected={props.orderBy === OrderQuestionsBy.ACTIVE}
          />
          <SortLink
            label="Most Views"
            to={buildUrl('views')}
            selected={props.orderBy === OrderQuestionsBy.VIEWS}
          />
          <SortLink
            label="Most Votes"
            to={buildUrl('votes')}
            selected={props.orderBy === OrderQuestionsBy.VOTES}
          />
          <SortLink
            label="New"
            to={buildUrl('new')}
            selected={props.orderBy === OrderQuestionsBy.NEW}
          />
        </SortBar>
      </div>
    </div>
  );
}
