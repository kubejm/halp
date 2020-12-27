import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { TagGridQuery } from '../../../__generated__/TagGridQuery.graphql';
import { Tag } from '../../shared';

interface TagDescriptionProps {
  name: string;
  questionCount: number;
}

function TagDescription({ name, questionCount }: TagDescriptionProps) {
  return (
    <div className="border rounded p-3">
      <Tag label={name} to={`/questions/tagged/${name}`} />
      <div className="text-gray-400 text-xs mt-2">
        {questionCount} questions
      </div>
    </div>
  );
}

export default function TagGrid() {
  const { tags } = useLazyLoadQuery<TagGridQuery>(
    graphql`
      query TagGridQuery {
        tags {
          name
          questionCount
        }
      }
    `,
    {},
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <div className="grid gap-4 grid-cols-3">
      {tags.map((tag, index) => (
        <TagDescription
          key={index}
          name={tag.name}
          questionCount={tag.questionCount}
        />
      ))}
    </div>
  );
}
