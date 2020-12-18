import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { questionSorterQuery } from '../../__generated__/questionSorterQuery.graphql';
import { Link } from 'react-router-dom';

// TODO: clean up Link elements
// TODO: add hover for buttons
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
            <Link to={'/'}>
              <li className="py-2 px-3 border border-r-0 bg-purple-500 text-white border rounded-l">
                New
              </li>
            </Link>
            <Link to={'/?orderBy=ACTIVE'}>
              <li className="py-2 px-3 border border-r-0">Active</li>
            </Link>
            <Link to={'/?orderBy=VOTES'}>
              <li className="py-2 px-3 border rounded-r">Most Votes</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
