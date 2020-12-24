import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface Props {
  to: string;
  selected: boolean;
  label: string;
  className?: string;
}

export default function PageLink(props: Props) {
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
