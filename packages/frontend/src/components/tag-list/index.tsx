import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { tagListQuery } from '../../__generated__/tagListQuery.graphql';
import Chip from '../chip';

interface TagProps {
  name: string;
}

function Tag(props: TagProps) {
  return (
    <div className="border rounded p-3">
      <Chip label={props.name} />
      <div className="text-gray-400 text-xs mt-2">123 questions</div>
    </div>
  );
}

export default function TagList() {
  const { tags } = useLazyLoadQuery<tagListQuery>(
    graphql`
      query tagListQuery {
        tags {
          name
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
        <Tag name={tag.name} />
      ))}
    </div>
  );
}
