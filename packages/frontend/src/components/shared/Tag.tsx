import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface DeleteButtonProps {
  onDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function DeleteButton(props: DeleteButtonProps) {
  return (
    <button
      onClick={props.onDelete}
      className="ml-1 text-sm font-bold text-purple-100 hover:text-purple-500 focus:outline-none"
    >
      x
    </button>
  );
}

interface TagProps {
  label: string;
  to?: string;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Tag(props: TagProps) {
  const classes =
    'inline-block bg-purple-400 text-white text-xs px-2 py-1 rounded mr-1';

  if (props.to) {
    return (
      <Link to={props.to} className={clsx(classes, 'hover:bg-purple-500')}>
        <span>{props.label}</span>
      </Link>
    );
  }

  return (
    <div className={classes}>
      <span>{props.label}</span>
      {props.onDelete && <DeleteButton onDelete={props.onDelete} />}
    </div>
  );
}
