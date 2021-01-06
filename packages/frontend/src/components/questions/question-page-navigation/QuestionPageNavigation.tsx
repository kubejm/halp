import React from 'react';
import PageLink from './PageLink';
import { graphql, useFragment } from 'react-relay/hooks';
import { QuestionPageNavigation_questionsPage$key } from '../../../__generated__/QuestionPageNavigation_questionsPage.graphql';
import queryString from 'query-string';

interface Props {
  currentPage: number;
  questionsPage: QuestionPageNavigation_questionsPage$key;
}

const pageList = (currentPage: number, pageCount: number) => {
  const previousPrevious = currentPage - 2;
  const previous = currentPage - 1;
  const next = currentPage + 1;
  const nextNext = currentPage + 2;

  return [previousPrevious, previous, currentPage, next, nextNext].filter(
    (pageNumber) => pageNumber > 0 && pageNumber <= pageCount
  );
};

const buildUrl = function (page: number) {
  const basePath = window.location.pathname;
  const params = queryString.parse(location.search);

  return `${basePath}?${queryString.stringify({
    ...params,
    page,
  })}`;
};

export default function QuestionPageNavigation({
  currentPage,
  questionsPage,
}: Props) {
  const { pageCount } = useFragment(
    graphql`
      fragment QuestionPageNavigation_questionsPage on QuestionsPage {
        pageCount
      }
    `,
    questionsPage
  );

  const hasPrevious = currentPage !== 1;
  const hasNext = currentPage !== pageCount;

  return (
    <div className="flex flex-wrap bg-white border-l border-b p-4">
      <div>
        <ul className="flex list-none rounded text-xs text-purple-500">
          {hasPrevious && (
            <PageLink
              to={buildUrl(currentPage - 1)}
              label="Prev"
              selected={false}
            />
          )}
          {pageList(currentPage, pageCount).map((pageNumber) => (
            <PageLink
              key={pageNumber}
              to={buildUrl(pageNumber)}
              label={String(pageNumber)}
              selected={pageNumber === currentPage}
            />
          ))}
          {hasNext && (
            <PageLink
              to={buildUrl(currentPage + 1)}
              label="Next"
              selected={false}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
