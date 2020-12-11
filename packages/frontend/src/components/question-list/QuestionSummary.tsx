import React from 'react';
import { Link } from 'react-router-dom';
import TagList from '../tag-list';

interface Props {
  id: string;
  answers?: number;
  username: string;
  createdAtRelative: string;
  excerpt: string;
  question: string;
  tags: readonly { readonly name: string }[];
  views?: number;
  votes?: number;
}

export default function QuestionSummary(props: Props) {
  return (
    <div className="flex bg-white border-l border-b p-4 divide-x">
      <div className="pr-3 text-center">
        <div className="pt-2">
          <div>{props.votes}</div>
          <div className="text-xs text-gray-700">votes</div>
        </div>
        <div className="pt-4 text-gray-700">
          <div>{props.answers}</div>
          <div className="text-xs">answers</div>
        </div>
        <div className="pt-4 text-xs text-gray-600">
          <div>{props.views}</div>
          <div>views</div>
        </div>
      </div>
      <div className="flex flex-grow flex-wrap pl-4">
        <div className="min-w-full text-lg">
          <Link to={`/question/${props.id}`} className="text-purple-800">
            {props.question}
          </Link>
        </div>
        <div className="min-w-full text-sm text-gray-700 pb-2">
          {props.excerpt}
        </div>
        <div className="flex flex-row-reverse justify-between min-w-full">
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">
              asked {props.createdAtRelative}
            </div>
            <div className="text-gray-700 text-sm align-middle">
              {props.username}
            </div>
          </div>
          <TagList tags={props.tags} />
        </div>
      </div>
    </div>
  );
}

QuestionSummary.defaultProps = {
  answers: 0,
  views: 0,
  votes: 0,
  tags: [],
};
