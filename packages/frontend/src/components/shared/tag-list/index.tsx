import React from 'react';
import Tag from '../tag';

interface Props {
  tags: readonly { readonly name: string }[];
}

export default function TagList(props: Props) {
  return (
    <div className="flex flex-row items-start text-xs pb-2">
      {props.tags.map((tag, index) => (
        <Tag
          key={index}
          label={tag.name}
          to={`/questions/tagged/${tag.name}`}
        />
      ))}
    </div>
  );
}
