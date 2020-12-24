import React from 'react';
import PageLink from './PageLink';
import { graphql, useFragment } from 'react-relay/hooks';
import { questionPager_questionsPage$key } from '../../__generated__/questionPager_questionsPage.graphql';

interface Props {
  currentPage: number;
  questionsPage: questionPager_questionsPage$key;
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

export default function QuestionPager({ currentPage, questionsPage }: Props) {
  const { pageCount } = useFragment(
    graphql`
      fragment questionPager_questionsPage on QuestionsPage {
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
              to={`/?page=${currentPage - 1}`}
              label="Prev"
              selected={false}
            />
          )}
          {pageList(currentPage, pageCount).map((pageNumber) => (
            <PageLink
              to={`/?page=${pageNumber}`}
              label={String(pageNumber)}
              selected={pageNumber === currentPage}
            />
          ))}
          {hasNext && (
            <PageLink
              to={`/?page=${currentPage + 1}`}
              label="Next"
              selected={false}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
