import React from 'react';
import AnswerVote from './AnswerVote';

interface Props {
  id: string;
  body: string;
  username: string;
  createdAtRelative: string;
}

export default function AnswerDetails(props: Props) {
  return (
    <div className="bg-white border-l border-b p-4">
      <div className="flex">
        <AnswerVote id={props.id} />
        <div className="flex-grow">
          <div className="text-sm">{props.body}</div>
          <div className="flex flex-row-reverse justify-between min-w-full mt-6">
            <div className="p-2 text-gray-500 text-xs align-middle w-40 min-w-min">
              <div className="text-xs">answered {props.createdAtRelative}</div>
              <div>{props.username}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
