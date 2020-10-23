import React from 'react';

interface Tag {
  readonly name: string;
}

interface Props {
  answers?: number;
  author: string;
  createdAtRelative: string;
  excerpt: string;
  question: string;
  tags: readonly Tag[];
  views?: number;
  votes?: number;
}

export default function QuestionSummary(props: Props) {
  return (
    <div className="flex border-l border-b p-4 divide-x">
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
        <div className="min-w-full text-lg">{props.question}</div>
        <div className="min-w-full text-sm text-gray-700 pb-2">
          {props.excerpt}
        </div>
        <div className="flex flex-row-reverse justify-between min-w-full">
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">
              asked {props.createdAtRelative}
            </div>
            <div className="text-gray-700 text-sm align-middle">
              {props.author}
            </div>
          </div>
          <div className="flex flex-row items-start text-xs pb-2">
            {props.tags.map((tag: Tag, index: number) => (
              <div
                key={index}
                className="text-gray-700 bg-gray-400 rounded text-center px-2 py-1 mr-1"
              >
                {tag.name}
              </div>
            ))}
          </div>
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
