import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { tagListQuery } from '../../__generated__/tagListQuery.graphql';
import Tag from '../tag';

interface TagDescriptionProps {
  name: string;
  questionCount: number;
}

function TagDescription({ name, questionCount }: TagDescriptionProps) {
  return (
    <div className="border rounded p-3">
      <Tag label={name} />
      <div className="text-gray-400 text-xs mt-2">
        {questionCount} questions
      </div>
    </div>
  );
}

export default function TagGrid() {
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
        <TagDescription name={tag.name} questionCount={tag.questionCount} />
      ))}
    </div>
  );
}
