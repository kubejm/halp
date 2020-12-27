import React from 'react';
import { TagGrid } from '../components';

export default function TagsScreen() {
  return (
    <div className="bg-white border-l border-b p-4">
      <div className="mb-3 pb-3 border-b">
        <h1 className="text-xl">Tags</h1>
      </div>
      <TagGrid />
    </div>
  );
}
