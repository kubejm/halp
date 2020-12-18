import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { questionSorterQuery } from '../../__generated__/questionSorterQuery.graphql';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface SortLinkProps {
  to: string;
  selected: boolean;
  label: string;
  className?: string;
}

function SortLink(props: SortLinkProps) {
  const defaultStyles = 'py-2 px-3 border';
  const selectedStyles = 'text-white bg-purple-500';
  const hoverStyles =
    'hover:bg-purple-400 hover:text-white hover:border-purple-200 transition duration-300 ease-in-out';

  return (
    <Link
      to={props.to}
      className={clsx(
        defaultStyles,
        props.selected && selectedStyles,
        hoverStyles,
        props.className
      )}
    >
      {props.label}
    </Link>
  );
}

// TODO: clean up Link elements
// TODO: change selected
export default function QuestionSorter() {
  const { questionCount } = useLazyLoadQuery<questionSorterQuery>(
    graphql`
      query questionSorterQuery {
        questionCount
      }
    `,
    {}
  );

  return (
    <div className="flex flex-wrap bg-white border-l border-b p-4">
      <h1 className="text-xl min-w-full">Questions</h1>
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
              selected={true}
              className=" border-r-0"
            />
            <SortLink
              label="Active"
              to="/?orderBy=ACTIVE"
              selected={false}
              className=" border-r-0"
            />
            <SortLink
              label="Most Votes"
              to="/?orderBy=VOTES"
              selected={false}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
