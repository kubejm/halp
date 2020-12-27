import React from 'react';

interface Props {
  voteCount: number;
  upvoteComponent: React.ReactNode;
  downvoteComponent: React.ReactNode;
}

export default function Vote({
  upvoteComponent: UpvoteComponent,
  downvoteComponent: DownvoteComponent,
  voteCount,
}: Props) {
  return (
    <div className="flex flex-col w-6 mr-4 text-gray-600 text-center">
      {UpvoteComponent}
      <div>{voteCount}</div>
      {DownvoteComponent}
    </div>
  );
}
