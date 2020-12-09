import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { tagListQuery } from '../../__generated__/tagListQuery.graphql';
import Chip from '../chip';

interface TagProps {
  name: string;
  questionCount: number;
}

function Tag({ name, questionCount }: TagProps) {
  return (
    <div className="border rounded p-3">
      <Chip label={name} />
      <div className="text-gray-400 text-xs mt-2">
        {questionCount} questions
      </div>
    </div>
  );
}

export default function TagList() {
  const { tags } = useLazyLoadQuery<tagListQuery>(
    graphql`
      query tagListQuery {
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
      {tags.map((tag) => (
        <Tag name={tag.name} questionCount={tag.questionCount} />
      ))}
    </div>
  );
}
