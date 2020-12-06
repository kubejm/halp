import React, { useState, useRef } from 'react';

export default function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (value && event.key === 'Enter') {
      event.preventDefault();

      if (!tags.some((tag) => tag.toLowerCase() === value.toLowerCase())) {
        setTags([...tags, value]);
      }

      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  };

  const remove = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Tags
        <input
          name="tags"
          className="border p-2 mt-3 w-full"
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoComplete="off"
        />
      </label>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span>{tag}</span>
            <button onClick={() => remove(tag)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
