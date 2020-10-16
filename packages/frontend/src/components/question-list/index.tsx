import React from 'react';

function QuestionSummary() {
  return (
    <div className="flex border-l border-b p-4 divide-x">
      <div className="pr-3 text-center">
        <div className="pt-2">
          <div>0</div>
          <div className="text-xs text-gray-700">votes</div>
        </div>
        <div className="pt-4 text-gray-700">
          <div>0</div>
          <div className="text-xs">answers</div>
        </div>
        <div className="pt-4 text-xs text-gray-600">
          <div>0</div>
          <div>views</div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap pl-4">
        <div className="min-w-full text-lg pb-2">How do I undo the most recent local commits in Git?</div>
        <div className="min-w-full text-sm text-gray-700 pb-2">I accidentally committed the wrong files to Git, but I haven't pushed the commit to the server yet. How can I undo those commits from the local repository?</div>
        <div className="flex flex-row items-start text-xs">
          <div className="text-gray-700 bg-gray-400 rounded text-center px-2 py-1 mr-1">git</div>
          <div className="text-gray-700 bg-gray-400 rounded text-center px-2 py-1 mr-1">git</div>
          <div className="text-gray-700 bg-gray-400 rounded text-center px-2 py-1 mr-1">git</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-500">asked 1 min ago</div>
          <div className="text-gray-700 text-sm align-middle">matt</div>
        </div>
      </div>
    </div>
  );
};

export default function QuestionList() {
  return (
    <>
      <QuestionSummary />
    </>
  );
}
