import React from 'react';

import { QuestionList } from '../components';

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap bg-white border-l border-b p-4">
        <h1 className="text-xl min-w-full">Questions</h1>
        <div className="flex justify-between min-w-full">
          <div className="flex flex-col-reverse">
            <div className="text-xs text-gray-500">1234 questions asked</div>
          </div>
          <div>
            <ul className="flex list-none rounded text-xs text-purple-500">
              <li className="py-2 px-3 border border-r-0 bg-purple-500 text-white border rounded-l">
                New
              </li>
              <li className="py-2 px-3 border border-r-0">Active</li>
              <li className="py-2 px-3 border rounded-r">Most Votes</li>
            </ul>
          </div>
        </div>
      </div>
      <QuestionList />
    </>
  );
}
