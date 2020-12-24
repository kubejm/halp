import React from 'react';
import PageLink from './PageLink';
import { graphql, useFragment } from 'react-relay/hooks';
import { questionPager_questionsPage$key } from '../../__generated__/questionPager_questionsPage.graphql';

interface Props {
  page: number;
  questionsPage: questionPager_questionsPage$key;
}

const pageList = (page: number, pageCount: number) => {
  const previousPrevious = page - 2;
  const previous = page - 1;
  const next = page + 1;
  const nextNext = page + 2;

  return [previousPrevious, previous, page, next, nextNext].filter(
    (pageNumber) => pageNumber > 0 && pageNumber <= pageCount
  );
};

export default function QuestionPager({ page, questionsPage }: Props) {
  const { pageCount } = useFragment(
    graphql`
      fragment questionPager_questionsPage on QuestionsPage {
        pageCount
      }
    `,
    questionsPage
  );

  const hasPrevious = page !== 1;
  const hasNext = page !== pageCount;

  return (
    <div className="flex flex-wrap bg-white border-l border-b p-4">
      <div>
        <ul className="flex list-none rounded text-xs text-purple-500">
          {hasPrevious && (
            <PageLink to={`/?page=${page - 1}`} label="Prev" selected={false} />
          )}
          {pageList(page, pageCount).map((pageNumber) => (
            <PageLink
              to={`/?page=${pageNumber}`}
              label={String(pageNumber)}
              selected={pageNumber === page}
            />
          ))}
          {hasNext && (
            <PageLink to={`/?page=${page + 1}`} label="Next" selected={false} />
          )}
        </ul>
      </div>
    </div>
  );
}
