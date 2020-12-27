import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { tagGridQuery } from '../../../__generated__/tagGridQuery.graphql';
import Tag from '../../tag';

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
  const { tags } = useLazyLoadQuery<tagGridQuery>(
    graphql`
      query tagGridQuery {
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
