import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface PageLinkProps {
  to: string;
  selected: boolean;
  label: string;
  className?: string;
}

function PageLink(props: PageLinkProps) {
  const defaultStyles = 'py-1 px-2 border rounded ml-0.5 mr-0.5';
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

interface QuestionPagerProps {
  page: number;
}

export default function QuestionPager({ page }: QuestionPagerProps) {
  return (
    <div className="flex flex-wrap bg-white border-l border-b p-4">
      <div>
        <ul className="flex list-none rounded text-xs text-purple-500">
          <PageLink to={`/?page=${page - 1}`} label="Prev" selected={false} />
          <PageLink
            to={`/?page=${page - 1}`}
            label={String(page - 1)}
            selected={false}
          />
          <PageLink
            to={`/?page=${page}`}
            label={String(page)}
            selected={true}
          />
          <PageLink
            to={`/?page=${page + 1}`}
            label={String(page + 1)}
            selected={false}
          />
          <PageLink to={`/?page=${page + 1}`} label="Next" selected={false} />
        </ul>
      </div>
    </div>
  );
}
