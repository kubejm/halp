import React from 'react';

interface Props {
  label: string;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Chip(props: Props) {
  return (
    <div className="inline-block bg-purple-400 text-white text-xs px-2 py-1 rounded mr-1">
      <span>{props.label}</span>
      {props.onDelete && (
        <button
          onClick={props.onDelete}
          className="ml-1 text-sm font-bold text-purple-100 hover:text-purple-500 focus:outline-none"
        >
          x
        </button>
      )}
    </div>
  );
}
